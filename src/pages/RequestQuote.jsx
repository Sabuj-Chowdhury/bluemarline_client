import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ChevronLeft, Building, User, Mail, Phone, Package, Box, FileText, Upload, Send, Loader2 } from 'lucide-react';

const RequestQuote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    customDesign: false,
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-fill from Products page router state
  useEffect(() => {
    if (location.state?.productName) {
      setFormData(prev => ({ ...prev, productType: location.state.productName }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validation
  const isStep1Valid = formData.name.trim() !== "" && formData.company.trim() !== "" && formData.email.trim() !== "";
  const isStep2Valid = formData.productType.trim() !== "" && formData.quantity !== "" && Number(formData.quantity) > 0;
  
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Wait a bit, then maybe navigate home or show success
    }, 2000);
  };

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="w-full bg-zinc-50 font-sans text-zinc-900 pt-32 pb-24 min-h-screen">
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight uppercase">Request a Quote</h1>
          <p className="text-zinc-500 font-medium">Enterprise B2B manufacturing. Fast estimations. Secure processing.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden relative">
          
          {/* Progress Bar */}
          <div className="bg-zinc-950 px-8 py-6 flex items-center justify-between relative">
            {/* Connecting Line Background */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-zinc-800 -translate-y-1/2 z-0 hidden sm:block"></div>
            {/* Connecting Line Foreground */}
            <motion.div 
              className="absolute top-1/2 left-8 h-1 bg-primary -translate-y-1/2 z-0 hidden sm:block"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${
                  currentStep === step ? 'bg-primary text-white scale-110 shadow-[0_0_15px_rgba(37,99,235,0.5)]' :
                  currentStep > step ? 'bg-primary text-white' : 'bg-zinc-800 text-zinc-500 border-2 border-zinc-700'
                }`}>
                  {currentStep > step ? <CheckCircle2 size={18} /> : step}
                </div>
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block ${
                  currentStep >= step ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  {step === 1 ? 'Basic Info' : step === 2 ? 'Product' : step === 3 ? 'Details' : 'Review'}
                </span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12 min-h-[400px]">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500 w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">Quote Submitted!</h2>
                <p className="text-zinc-500 font-medium max-w-md mx-auto mb-8">
                  Our engineering team has received your specifications. We will contact you within 24 hours with an initial estimation.
                </p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-zinc-900 hover:bg-primary text-white px-8 py-3 rounded-xl font-bold transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <motion.div key="step1" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-2xl font-black text-zinc-900 mb-8 border-l-4 border-primary pl-4">Basic Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <User size={14} /> Full Name <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" 
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <Building size={14} /> Company Name <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enterprise Manufacturing Inc." 
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <Mail size={14} /> Email Address <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" 
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <Phone size={14} /> Phone Number
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" 
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <motion.div key="step2" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-2xl font-black text-zinc-900 mb-8 border-l-4 border-primary pl-4">Product Details</h3>
                    
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <Package size={14} /> Product Type <span className="text-red-500">*</span>
                        </label>
                        <select name="productType" value={formData.productType} onChange={handleInputChange}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium appearance-none">
                          <option value="">Select a product category...</option>
                          <option value="Aquarium Products">Aquarium Products (Filtration, Tanks)</option>
                          <option value="Household Plastic">Household Plastic (Storage, Bins)</option>
                          <option value="Industrial Components">Industrial Components (Gears, Enclosures)</option>
                          <option value="Custom OEM">Custom OEM Fabrication</option>
                          {/* Fallback for injected precise names from Products Page */}
                          {formData.productType && !["", "Aquarium Products", "Household Plastic", "Industrial Components", "Custom OEM"].includes(formData.productType) && (
                            <option value={formData.productType}>{formData.productType} (Pre-selected)</option>
                          )}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <Box size={14} /> Estimated Quantity <span className="text-red-500">*</span>
                        </label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} min="100" placeholder="Minimum bulk order: 100+" 
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium" />
                      </div>

                      {/* Custom Design Toggle */}
                      <label className="flex items-center gap-4 cursor-pointer p-6 border border-zinc-200 rounded-xl bg-zinc-50 hover:border-primary/50 transition-colors group relative overflow-hidden">
                        <div className={`absolute inset-0 bg-primary/5 transition-opacity ${formData.customDesign ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="relative z-10 flex items-center gap-4 w-full">
                          <div className="relative shrink-0">
                            <input type="checkbox" name="customDesign" checked={formData.customDesign} onChange={handleInputChange} className="sr-only" />
                            <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${formData.customDesign ? 'bg-primary' : 'bg-zinc-300'}`}></div>
                            <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 shadow-md ${formData.customDesign ? 'transform translate-x-6' : ''}`}></div>
                          </div>
                          <div>
                            <div className="font-bold text-zinc-900 text-lg">Custom Design / OEM Mold Required?</div>
                            <div className="text-sm text-zinc-500 font-medium">Toggle if you need us to create tooling from CAD.</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <motion.div key="step3" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-2xl font-black text-zinc-900 mb-8 border-l-4 border-primary pl-4">Project Details</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <FileText size={14} /> Requirements & Specs
                        </label>
                        <textarea 
                          name="description" value={formData.description} onChange={handleInputChange} rows="5"
                          placeholder="Describe materials, compliance needs (e.g. ISO/RoHS), delivery timeline..." 
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all font-medium resize-none" 
                        />
                      </div>

                      {/* UI Only File Upload */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                          <Upload size={14} /> Upload Reference / CAD (Optional)
                        </label>
                        <div className="w-full border-2 border-dashed border-zinc-300 hover:border-primary bg-zinc-50 rounded-xl p-8 text-center transition-colors cursor-pointer group">
                          <Upload className="mx-auto text-zinc-400 group-hover:text-primary transition-colors mb-4" size={32} />
                          <p className="text-zinc-700 font-bold mb-1">Click to upload or drag & drop</p>
                          <p className="text-zinc-400 text-xs font-medium">STEP, IGES, PDF, PNG (Max 50MB)</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <motion.div key="step4" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-2xl font-black text-zinc-900 mb-8 border-l-4 border-primary pl-4">Review Summary</h3>
                    
                    <div className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden text-sm shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-200">
                          <h4 className="font-bold text-zinc-900 mb-4 tracking-wider uppercase text-xs text-primary">Company Profile</h4>
                          <div className="space-y-4">
                            <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Name</span> <span className="font-bold text-zinc-900 text-base">{formData.name}</span></div>
                            <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Company</span> <span className="font-bold text-zinc-900 text-base">{formData.company}</span></div>
                            <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Email</span> <span className="font-medium text-zinc-900 text-base">{formData.email}</span></div>
                            {formData.phone && <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Phone</span> <span className="font-medium text-zinc-900 text-base">{formData.phone}</span></div>}
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-zinc-900 mb-4 tracking-wider uppercase text-xs text-primary">Order specifics</h4>
                          <div className="space-y-4">
                            <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Product</span> <span className="font-bold text-zinc-900 text-base">{formData.productType}</span></div>
                            <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Quantity</span> <span className="font-bold text-zinc-900 text-base">{formData.quantity} Units</span></div>
                            <div><span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Custom OEM required</span> <span className={`font-black text-base ${formData.customDesign ? 'text-green-600' : 'text-zinc-500'}`}>{formData.customDesign ? 'YES' : 'NO'}</span></div>
                          </div>
                        </div>
                      </div>
                      
                      {formData.description && (
                        <div className="p-6 border-t border-zinc-200 bg-white">
                          <h4 className="font-bold text-zinc-900 mb-2 tracking-wider uppercase text-xs text-primary">Notes / Specs</h4>
                          <p className="text-zinc-700 font-medium leading-relaxed bg-zinc-50 p-4 border border-zinc-200 rounded-xl">"{formData.description}"</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>

          {/* Form Controls */}
          {!isSuccess && (
            <div className="px-8 py-6 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${
                  currentStep === 1 ? 'opacity-0 cursor-default' : 'text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                <ChevronLeft size={18} /> Back
              </button>

              {currentStep < totalSteps ? (
                <button 
                  onClick={nextStep}
                  disabled={(currentStep === 1 && !isStep1Valid) || (currentStep === 2 && !isStep2Valid)}
                  className="flex items-center gap-2 bg-zinc-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 disabled:hover:shadow-none shadow-lg"
                >
                  Next Step <ChevronRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all disabled:opacity-80 disabled:cursor-wait"
                >
                  {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : <><Send size={18} /> Submit Quote</>}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
