import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Shield, Truck, CheckCircle, ArrowLeft } from 'lucide-react';

const CheckoutSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [orderComplete, setOrderComplete] = useState(false);

  const steps = [
    'Product Selection',
    'Customer Information',
    'Payment Details',
    'Order Confirmation'
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setOrderComplete(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (orderComplete) {
    return (
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
            <p className="text-slate-300 mb-8">
              Thank you for your NEXUS Hub purchase. Your smart home revolution begins now!
            </p>
            <div className="bg-nexus-500/10 border border-nexus-500/20 rounded-lg p-4 mb-8">
              <p className="text-nexus-400 font-medium">Order #NH-2024-001234</p>
              <p className="text-slate-300">Estimated delivery: 3-5 business days</p>
            </div>
            <button
              onClick={() => {
                setOrderComplete(false);
                setCurrentStep(0);
              }}
              className="bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Start Another Demo
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Checkout Simulation
          </h2>
          <p className="text-xl text-slate-300">
            Experience our streamlined one-click checkout process
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    index <= currentStep
                      ? 'bg-nexus-500 text-white'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    index <= currentStep ? 'text-nexus-400' : 'text-slate-400'
                  }`}
                >
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-4 ${
                      index < currentStep ? 'bg-nexus-500' : 'bg-slate-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="product"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Selected Product</h3>
                <div className="bg-slate-800/50 rounded-lg p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-nexus-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">NEXUS Pro + Control Tablet</h4>
                    <p className="text-slate-300">Load-shedding-proof smart home hub with 10" HD tablet</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">R9,999</div>
                    <div className="text-sm text-slate-400 line-through">R12,999</div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Customer Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500 md:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500 md:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Payment Details</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Shield className="w-4 h-4" />
                  <span>Your payment information is encrypted and secure</span>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Order Confirmation</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">NEXUS Hub Pro</span>
                      <span className="text-white">$599.00</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Shipping</span>
                      <span className="text-green-400">Free</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Tax</span>
                      <span className="text-white">$47.92</span>
                    </div>
                    <hr className="border-slate-700 my-2" />
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-nexus-400">$646.92</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Truck className="w-4 h-4" />
                    <span>Free delivery in 3-5 business days</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              onClick={handlePrevStep}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                currentStep === 0
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              disabled={currentStep === 0}
              whileHover={{ scale: currentStep === 0 ? 1 : 1.02 }}
              whileTap={{ scale: currentStep === 0 ? 1 : 0.98 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </motion.button>

            <motion.button
              onClick={handleNextStep}
              className="bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-nexus-600 hover:to-nexus-700 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {currentStep === steps.length - 1 ? 'Complete Order' : 'Next Step'}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;