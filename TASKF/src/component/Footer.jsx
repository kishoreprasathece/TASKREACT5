import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-black grid grid-cols-4 text-white p-6">
    <div class="mb-6">
        <h4 class="text-lg font-bold mb-2">SUPPORT</h4>
        <p>Mon - Sat | 9:00 AM to 9:00 PM (EST)</p>
        <p>Excludes Public Holidays</p>
        <p>Chat with us or send an email. We respond within 24-48 hours.</p>
    </div>

    <div class="mb-6">
        <p class="text-lg font-bold mb-2">ORDER</p>
        <ul>
            <li class="mb-1">Track</li>
            <li class="mb-1">Exchange & Return</li>
            <li class="mb-1">Become Insider</li>
        </ul>
    </div>

    <div class="mb-6">
        <p class="text-lg font-bold mb-2">INFORMATION</p>
        <ul>
            <li class="mb-1">Shipping Policy</li>
            <li class="mb-1">Privacy</li>
            <li class="mb-1">Get 20% OFF</li>
            <li class="mb-1">Terms & Conditions</li>
        </ul>
    </div>

    <div class="mb-6">
        <p class="text-lg font-bold mb-2">SOCIAL MEDIA</p>
        <ul class="flex space-x-4">
            <li>
                <a href="https://www.instagram.com/">
                    <img src="image/Instagram.png" alt="Instagram" class="w-6 h-6"/>
                </a>
            </li>
            <li>
                <a href="https://wa.me/message">
                    <img src="image/WhatsApp.png" alt="WhatsApp" class="w-6 h-6"/>
                </a>
            </li>
        </ul>
        <p class="mt-4">All rights reserved</p>
    </div>
</footer>

<footer class=" bg-black text-white text-center py-4">
    <p>© 2024 How Of Alpha.</p>
</footer>

        </div>
    );
};

export default Footer;