import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // For Vite
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // For Vite
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // For Vite
    )
    .then(
      (result) => {
        console.log("SUCCESS:", result.text);
        setAlert({ open: true, message: "Message sent successfully!", severity: "success" });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("FAILED:", error);
        setAlert({ open: true, message: "Failed to send message. Please try again.", severity: "error" });
      }
    )
    .catch((error) => {
      console.error("Unexpected error:", error);
      setAlert({ open: true, message: "An unexpected error occurred.", severity: "error" });
    });
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => setAlert({ ...alert, open: false });


  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t("contact.title")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {t("contact.info")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    surya.tanuku@hotmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +91 955-3-781-781
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Hyderabad, India
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={alert.severity as "success" | "error"} variant="filled" sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </section>
  );
}
