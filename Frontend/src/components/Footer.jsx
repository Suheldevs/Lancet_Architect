const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img src="/logo.png" alt="Space Culture" className="h-16 mb-4" />
            <p className="text-sm">Fill design in your life...</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full"><i className="fab fa-twitter"></i></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full"><i className="fab fa-instagram"></i></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          {/* Useful Links & Our Projects */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Project</a></li>
                <li><a href="#" className="hover:underline">Gallery</a></li>
                <li><a href="#" className="hover:underline">Testimonial</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Admin Login</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Projects</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Commercial Spaces</a></li>
                <li><a href="#" className="hover:underline">Residential Projects</a></li>
                <li><a href="#" className="hover:underline">City Planning</a></li>
                <li><a href="#" className="hover:underline">Interior Design</a></li>
                <li><a href="#" className="hover:underline">Functional Kitchens</a></li>
                <li><a href="#" className="hover:underline">Project Analysis</a></li>
                <li><a href="#" className="hover:underline">Renovation</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">+91-8172987965</p>
            <p className="text-sm">+91-9555599914</p>
            <p className="text-sm mt-2">spaceculture22@gmail.com</p>
            <p className="text-sm mt-2">Sikka House A1/1, 2nd Floor,<br />Vibhuti Khand, Gomti Nagar, Lucknow</p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center text-sm border-t border-gray-700 mt-8 pt-4">
          <p>Copyright 2025 SPACE CULTURE PVT. LTD. || All Rights Reserved || Designed By <a href="#" className="text-gray-400 hover:underline">CODECRAFTER</a></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  