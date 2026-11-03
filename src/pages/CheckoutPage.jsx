import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Lock, ArrowLeft, Truck, CreditCard, Sparkles } from 'lucide-react';
import { useCartStore } from '../hooks/useCartStore';
import IMAGES from '../data/images';

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCartStore();
  const subtotal = getCartTotal();

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    consecrationNote: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrder = `GA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setIsSubmitted(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-32 sm:pt-40 pb-24 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center border border-altar-silver/30 bg-[#0c0c0e] p-8 sm:p-12 relative shadow-[0_0_50px_rgba(214,211,204,0.15)]">
          <div className="w-16 h-16 rounded-full bg-altar-silver/10 border border-altar-silver mx-auto mb-6 flex items-center justify-center text-altar-silver">
            <CheckCircle2 size={32} />
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-altar-pewter block mb-2">
            The Covenant Is Sealed
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl uppercase tracking-widest text-altar-bone mb-3">
            Consecration Complete
          </h1>

          <p className="font-sans text-xs sm:text-sm text-altar-pewter leading-relaxed mb-6 font-light">
            Thy sacred relics have been logged into our sanctuary registry. An encrypted dispatch epistle will arrive at <span className="text-altar-silver font-mono">{formData.email || 'thy email'}</span> once the wax seal is set.
          </p>

          <div className="p-4 bg-[#070709] border border-altar-silver/15 mb-8 text-left space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-serif text-altar-pewter">Order Registry Sigil:</span>
              <span className="font-mono text-altar-silver font-bold">{orderNumber}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-serif text-altar-pewter">Payment Method:</span>
              <span className="font-mono text-altar-silver uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-serif text-altar-pewter">Estimated Dispatch:</span>
              <span className="font-mono text-altar-silver">3 - 5 Ritual Days</span>
            </div>
          </div>

          <Link to="/" className="btn-altar w-full py-3.5 text-xs">
            Return To Grave Altar
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-36 pb-24 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-serif text-xl uppercase tracking-widest text-altar-bone mb-4">
            Altar is Empty
          </h2>
          <Link to="/shop" className="btn-altar text-xs py-2.5 px-6">
            Summon Relics First
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
            // Sacred Checkout
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl uppercase tracking-widest text-altar-bone mt-1">
            Dispatch Consecration
          </h1>
          <p className="font-sans text-xs text-altar-pewter mt-2">
            All shipments are secured in wax-sealed boxes and fully insured.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Devotee & Address Info (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Devotee Identity */}
            <div className="p-6 bg-[#0c0c0e] border border-altar-silver/15 space-y-4">
              <h3 className="font-serif text-sm uppercase tracking-widest text-altar-silver pb-2 border-b border-altar-silver/10">
                01. Devotee Identity
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Lord Ronald Thorne"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                    Epistle (Email) *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="devotee@gravealtar.com"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                    Phone / Signal Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Crypt Address */}
            <div className="p-6 bg-[#0c0c0e] border border-altar-silver/15 space-y-4">
              <h3 className="font-serif text-sm uppercase tracking-widest text-altar-silver pb-2 border-b border-altar-silver/10">
                02. Sanctuary Sanctuary Address
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                    Street & Estate / Apartment *
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Apartment 4B, Black Abbey Manor"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Mumbai"
                      className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Maharashtra"
                      className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="400001"
                      className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2.5 focus:outline-none focus:border-altar-silver"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-serif uppercase tracking-wider text-altar-pewter mb-1">
                    Secret Inscription Note (Optional)
                  </label>
                  <textarea
                    rows="2"
                    name="consecrationNote"
                    value={formData.consecrationNote}
                    onChange={handleChange}
                    placeholder="Special delivery gate sigil or gift message in wax..."
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-3 py-2 focus:outline-none focus:border-altar-silver"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-6 bg-[#0c0c0e] border border-altar-silver/15 space-y-4">
              <h3 className="font-serif text-sm uppercase tracking-widest text-altar-silver pb-2 border-b border-altar-silver/10">
                03. Tribute & Payment Method
              </h3>

              <div className="space-y-3">
                <label className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'border-altar-silver bg-altar-silver/10' : 'border-altar-silver/15 bg-[#121215]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="accent-altar-silver"
                    />
                    <span className="font-serif text-xs uppercase tracking-wider text-altar-bone">
                      Instant UPI / Google Pay / PhonePe / Paytm
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-altar-silver">Zero fee</span>
                </label>

                <label className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'border-altar-silver bg-altar-silver/10' : 'border-altar-silver/15 bg-[#121215]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-altar-silver"
                    />
                    <span className="font-serif text-xs uppercase tracking-wider text-altar-bone">
                      Credit / Debit Card (Visa, RuPay, Mastercard, Amex)
                    </span>
                  </div>
                  <CreditCard size={16} className="text-altar-pewter" />
                </label>

                <label className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'border-altar-silver bg-altar-silver/10' : 'border-altar-silver/15 bg-[#121215]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-altar-silver"
                    />
                    <span className="font-serif text-xs uppercase tracking-wider text-altar-bone">
                      Crypt Dispatch (Cash / UPI upon delivery)
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-altar-pewter">Available</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary Sidebar (Spans 5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-[#0c0c0e] border border-altar-silver/20 sticky top-28 space-y-6">
              <h3 className="font-serif text-base uppercase tracking-widest text-altar-silver pb-3 border-b border-altar-silver/10">
                Altar Contents ({cart.length})
              </h3>

              <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs">
                    <img
                      src={item.product.images.primary}
                      alt={item.product.name}
                      className="w-12 h-14 object-cover bg-black border border-altar-silver/10 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif text-altar-bone uppercase tracking-wider line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="font-mono text-[10px] text-altar-pewter">
                        Qty: {item.quantity} • {item.size}
                      </p>
                      <p className="font-serif text-altar-silver mt-1">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-altar-silver/10 pt-4 space-y-2 text-xs text-altar-pewter">
                <div className="flex justify-between">
                  <span>Offering Total</span>
                  <span className="font-mono text-altar-bone">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Express Courier</span>
                  <span className="font-mono text-altar-silver">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Gothic Velvet Coffer</span>
                  <span className="font-mono text-altar-silver">Included</span>
                </div>
                <div className="border-t border-altar-silver/10 pt-3 flex justify-between text-base font-serif text-altar-bone font-medium">
                  <span>Final Tribute</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-blood w-full py-4 text-xs font-serif tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Lock size={14} />
                <span>Authorize Offering</span>
              </button>

              <div className="text-[10px] text-altar-pewter/60 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck size={14} />
                <span>256-bit encrypted checkout with buyer indemnity</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}

