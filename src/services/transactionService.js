import { db } from "../FireBase";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";

// Simpan transaksi & kurangi stok produk
export const saveTransaction = async ({
  customerName,
  phone,
  cart,
  discount,
  paymentMethod
}) => {
  const timestamp = new Date().toISOString();
  let total = 0;

  const items = cart.map((item) => {
    total += item.price * item.quantity;
    return {
      productId: item.id.toString(),
      name: item.name,
      quantity: item.quantity,
      price: item.price
    };
  });

  if (discount > 0) {
    total -= (total * discount) / 100;
  }

  const trxData = {
    customerName,
    phone,
    items,
    discount,
    paymentMethod,
    total,
    createdAt: timestamp,
    invoice: `INV-${Date.now()}`
  };

  await addDoc(collection(db, "transactions"), trxData);

  for (const item of cart) {
    if (item.category === "product") {
      const productRef = doc(db, "products", item.id.toString());
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        const currentStock = productSnap.data().stock || 0;
        const newStock = currentStock - item.quantity;
        await updateDoc(productRef, { stock: newStock });
      }
    }
  }
};
