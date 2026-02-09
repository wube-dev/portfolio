import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  // Senior State Management: Tracking loading, success, and error in one object
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Start Loading State
    setStatus({ submitting: true, success: false, error: false });

    // 2. Prepare Template Parameters (Matches your HTML exactly)
    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
      time: new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      }), // Generates: Sunday, February 8, 2026 at 10:22 PM
    };

    try {
      // 3. Send using the SDK (Ensure your .env variables are set)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // 4. Success Handling
      setStatus({ submitting: false, success: true, error: false });
      formRef.current.reset(); // Clear the form

      // Auto-hide success message after 5 seconds
      setTimeout(
        () => setStatus((prev) => ({ ...prev, success: false })),
        5000,
      );
    } catch (err) {
      console.error("Contact Error:", err);
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
            Let's Build <span className="text-blue-500">Something Amazing</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Drop a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0a0a0a] p-8 rounded-3xl border border-gray-800"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
              your full Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Ahmed zakir mustefa "
              className="w-full bg-black border border-gray-800 p-4 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
            your  Email Address
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="abebe@gmail.com"
              className="w-full bg-black border border-gray-800 p-4 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Describe your project clue..."
              className="w-full bg-black border border-gray-800 p-4 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className={`md:col-span-2 py-4 rounded-xl font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              status.submitting
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500 active:scale-[0.98] shadow-lg shadow-blue-900/20"
            }`}
          >
            {status.submitting ? "Transmitting Data..." : "send the Message"}
          </button>

          {/* Feedback UI */}
          {status.success && (
            <div className="md:col-span-2 p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-center text-sm font-bold">
              ✓ Transmission Successful. Check your inbox soon.
            </div>
          )}
          {status.error && (
            <div className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-center text-sm font-bold">
              × Error: System failed to send. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
