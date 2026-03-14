import { CartItem } from '@/types';
import { WHATSAPP_NUMBER, BAKERY_NAME } from '@/data/products';

export function generateWhatsAppMessage(
  items: CartItem[],
  pickupDate: string,
  pickupSlot: string,
  customerName: string,
  customerPhone: string
): string {
  const itemLines = items.map((item, i) => {
    let line = `*${i + 1}. ${item.productName}*`;
    line += `\n   • Size: ${item.weight}`;
    if (item.flavour && item.flavour !== 'Default (as described)') {
      line += `\n   • Flavour: ${item.flavour}`;
    }
    if (item.topper && item.topper !== 'No Topper') {
      line += `\n   • Topper: ${item.topper} (+₹${item.topperPrice})`;
    }
    if (item.cakeMessage) {
      line += `\n   • Cake Message: "${item.cakeMessage}"`;
    }
    if (item.specialInstructions) {
      line += `\n   • Special Instructions: ${item.specialInstructions}`;
    }
    line += `\n   • Qty: ${item.quantity}  |  ₹${(item.totalPrice * item.quantity).toLocaleString('en-IN')}`;
    return line;
  }).join('\n\n');

  const total = items.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);

  return `🌐 *WEBSITE ORDER — ALL DETAILS FILLED* ✅
_(No need to ask again — date, size, flavour & pickup already included below)_

━━━━━━━━━━━━━━━━
*🛒 ORDER DETAILS*
━━━━━━━━━━━━━━━━

${itemLines}

━━━━━━━━━━━━━━━━
*📦 PICKUP DETAILS*
━━━━━━━━━━━━━━━━
📅 Date: ${pickupDate}
🕐 Slot: ${pickupSlot}

━━━━━━━━━━━━━━━━
*👤 MY DETAILS*
━━━━━━━━━━━━━━━━
Name: ${customerName}
Phone: ${customerPhone}

━━━━━━━━━━━━━━━━
*💰 ORDER TOTAL: ₹${total.toLocaleString('en-IN')}*
━━━━━━━━━━━━━━━━

Please confirm my order. Thank you! 🙏`;
}

export function openWhatsApp(message: string): void {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
