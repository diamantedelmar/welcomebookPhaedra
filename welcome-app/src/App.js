import React, { useState } from 'react';

// HELPER: To simulate an icon library like lucide-react, we'll define SVG components.
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const KeyRoundIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
    <circle cx="16.5" cy="7.5" r=".5" />
  </svg>
);

const CompassIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const CarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><path d="M7 17h10"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
);

const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const WifiIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
);

const MapPinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const ClockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const LogOutIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
);

const CopyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);

const ChevronDownIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

const PhoneIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const CoffeeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
);

const UtensilsCrossedIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8-12.2 12.2" />
    <path d="m2 16 6 6" />
    <path d="M14.5 11.5 22 4" />
  </svg>
);

const LandmarkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
);

const WavesIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6c.4.5 1.2 1 2.5 1C7 7 7.5 6 9 6s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1c1.3 0 2.1-.5 2.5-1"/><path d="M3 12c.4.5 1.2 1 2.5 1C7 13 7.5 12 9 12s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1c1.3 0 2.1-.5 2.5-1"/><path d="M3 18c.4.5 1.2 1 2.5 1C7 19 7.5 18 9 18s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1c1.3 0 2.1-.5 2.5-1"/></svg>
);

const MountainSnowIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2.19 8.23.19"/></svg>
);


// DATA FROM THE DOCUMENT
const guideData = {
    coffee: [
        { name: "Alchimion", description: "Ideal for breakfast or brunch. Creative options like overnight oats, egg dishes, and pancakes. Welcoming and friendly atmosphere." },
        { name: "The Cup", description: "A proper 'third wave' coffee shop. Renowned for outstanding espresso. Also serves delicious ciabatta sandwiches." },
        { name: "Zero Cafe Bar", description: "A haven for craft beer enthusiasts with a large, shady beer garden. Also serves coffee, cocktails, and snacks." },
        { name: "Platanos Restaurant", description: "Dine beneath the legendary Plane Tree of Hippocrates. Offers a beautiful setting and high-quality food." },
        { name: "Coffee Stories", description: "A charming neighbourhood café with a sweet atmosphere. Offers standard Greek coffee and delivery." },
    ],
    dining: [
        { name: "Xasapaki (The Hasapaki)", description: "Host's top recommendation. A unique butcher shop & steakhouse. Handpick your cut of meat. Famous for steaks and burgers.", category: "Host's Choice" },
        { name: "Barbouni", description: "Wonderful shore-side setting for fresh seafood. Try the cod croquettes or squid ink tagliatelle. Book ahead for a waterside table.", category: "Seafood" },
        { name: "Nick the Fisherman", description: "Next to Barbouni, serving incredibly fresh, simply prepared fish.", category: "Seafood" },
        { name: "Patriko", description: "Fantastic family-run choice for authentic Greek meze (small sharing plates). Try the baked feta with honey.", category: "Authentic Greek" },
        { name: "Taverna Evdokia", description: "A complete Greek experience with genuine hospitality and delicious, fresh dishes prepared by Evdokia herself.", category: "Authentic Greek" },
        { name: "Cuvée", description: "Sophisticated, modern destination dining at the Aqua Blu Hotel. Perfect for a special occasion with tasting menus.", category: "Fine Dining" },
    ],
    history: [
        { name: "Asklepion", description: "The island's most significant archaeological site. An ancient healing sanctuary and medical school linked to Hippocrates.", ticket: "€8 (Summer)" },
        { name: "Neratzia Castle (Castle of the Knights)", description: "Impressive 15th-century castle at the harbour entrance.", ticket: "€3" },
        { name: "Casa Romana", description: "Restored Roman villa in the style of Pompeii, with beautiful mosaics and frescoes.", ticket: "€10" },
        { name: "Ancient Agora", description: "The commercial and social centre of ancient Kos. Open-air ruins near the harbour.", ticket: "Free" },
        { name: "Roman Odeon", description: "A well-preserved 2nd-century BC theatre that sometimes hosts events.", ticket: "Free" },
    ],
    beaches: [
        { name: "Lambi Beach", description: "Your closest beach! A long, popular stretch of sand with shallow waters, well-organized with bars and watersports.", distance: "200m stroll" },
        { name: "Agios Stefanos Beach", description: "Arguably the most photogenic beach. Features the iconic Kastri islet with its blue-domed church.", distance: "35-40km SW" },
        { name: "Therma Beach", description: "A unique natural spa experience with hot springs flowing into the sea.", distance: "12km SE" },
        { name: "Paradise Beach", description: "Lives up to its name with golden sand and calm, shallow, green-blue waters. Great for families and watersports.", distance: "30-33km SW" },
        { name: "Tigaki Beach", description: "A vast expanse of fine white sand and crystal-clear, shallow waters. Perfect for children and wind/kite-surfing.", distance: "11km W" },
    ],
    villages: [
        { name: "Zia", description: "An absolute must-visit for sunset. A beautiful mountain village with breathtaking panoramic views. Oromedon restaurant is highly recommended." },
        { name: "Kefalos", description: "A quieter, traditional village on a hill overlooking Kamari Bay and the iconic Kastri islet. A great base for exploring southern beaches." },
        { name: "Paleo Pyli (Old Pyli)", description: "The atmospheric ruins of a Byzantine fortress perched on a hill, offering expansive views over the island." },
        { name: "Platani", description: "Unique home of Kos's Turkish-speaking Muslim minority, offering a different cultural flavour and excellent food." },
    ]
};

// Reusable Components
const Screen = ({ children, isVisible }) => (
    <div className={`p-4 pb-24 bg-slate-50 min-h-screen ${isVisible ? 'block' : 'hidden'}`}>
        {children}
    </div>
);

const SectionCard = ({ icon, title, children }) => (
    <div className="bg-white rounded-xl shadow-md p-5 mb-5">
        <div className="flex items-center mb-3">
            {icon}
            <h2 className="text-xl font-bold text-gray-800 ml-3">{title}</h2>
        </div>
        <div className="text-gray-600 space-y-3">
            {children}
        </div>
    </div>
);

const InfoRow = ({ label, value, children }) => (
    <div className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
        <span className="font-semibold text-gray-700">{label}</span>
        {value && <span className="text-right text-gray-900 font-mono">{value}</span>}
        {children}
    </div>
);

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-t border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-3 text-left">
                <span className="font-semibold text-gray-700">{title}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="pb-3 text-sm text-gray-500 space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
};

const GuideCategory = ({ icon, title, items, renderItem }) => (
    <div className="mb-6">
        <div className="flex items-center mb-3">
            {icon}
            <h3 className="text-2xl font-bold text-gray-800 ml-3">{title}</h3>
        </div>
        <div className="space-y-3">
            {items.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                    {renderItem(item)}
                </div>
            ))}
        </div>
    </div>
);


// Screen Components
const HomeScreen = ({ isVisible }) => (
    <Screen isVisible={isVisible}>
        <div className="text-center pt-10">
            <img src="https://placehold.co/120x120/3B82F6/FFFFFF?text=DM" alt="Diamante del Mar Logo" className="mx-auto rounded-full shadow-lg mb-6" />
            <h1 className="text-4xl font-bold text-gray-800">Diamante del Mar</h1>
            <p className="text-2xl text-blue-600 font-light mb-4">Phaedra</p>
            <p className="text-lg text-gray-600 max-w-md mx-auto">Kalós órises! Welcome to your sanctuary in Kos. We're delighted to host you. Use this app to make your stay effortless and memorable.</p>
        </div>
        <div className="mt-12">
            <SectionCard icon={<InfoIcon className="w-8 h-8 text-blue-500" />}>
                <h3 className="text-lg font-bold text-gray-800 mb-2">About this guide</h3>
                <p>Think of this as your curated intro to living like a local. We've gathered essentials for the apartment and our personal recommendations for exploring the island.</p>
                <p className="mt-2">Relax, unwind, and let your Kos story begin!</p>
            </SectionCard>
        </div>
    </Screen>
);

const EssentialsScreen = ({ isVisible }) => {
    const [copySuccess, setCopySuccess] = useState('');
    
    const handleCopy = () => {
        const password = "Phaedra!22420@";
        // A simple document.execCommand for iframe compatibility
        const textArea = document.createElement("textarea");
        textArea.value = password;
        textArea.style.position = "fixed"; //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            setCopySuccess('Failed');
        }
        document.body.removeChild(textArea);
    };

    return (
        <Screen isVisible={isVisible}>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Apartment Essentials</h1>
            
            <SectionCard icon={<MapPinIcon className="w-8 h-8 text-green-500" />}>
                <InfoRow label="Full Address" />
                <p className="text-lg text-gray-800 text-center py-2">
                    Sophokli Venizelou 54<br/>
                    Kos Town, 853 00
                </p>
            </SectionCard>
            
            <SectionCard icon={<WifiIcon className="w-8 h-8 text-indigo-500" />}>
                <InfoRow label="Network (SSID)" value="Phaedra" />
                <InfoRow label="Password">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-mono">Phaedra!22420@</span>
                        <button onClick={handleCopy} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1 hover:bg-gray-300">
                           <CopyIcon /> {copySuccess || 'Copy'}
                        </button>
                    </div>
                </InfoRow>
            </SectionCard>

            <SectionCard icon={<KeyRoundIcon className="w-8 h-8 text-amber-500" />}>
                 <InfoRow label="Check-in Time" value="From 4:00 PM" />
                 <InfoRow label="Lockbox Code" value="1723" />
                 <InfoRow label="Check-out Time" value="By 11:00 AM" />
                 <InfoRow label="Key Return">
                     <span className="text-gray-800 text-right">Leave keys on dining table</span>
                 </InfoRow>
            </SectionCard>

             <SectionCard icon={<UtensilsCrossedIcon className="w-8 h-8 text-rose-500" />}>
                <Accordion title="Kitchen & Laundry">
                    <p><strong>Oven/Stovetop:</strong> Use knobs for temperature and functions. Turn off after use.</p>
                    <p><strong>Microwave:</strong> Use for quick heating.</p>
                    <p><strong>Washing Machine:</strong> Located in the kitchen. Use detergent sparingly.</p>
                </Accordion>
                <Accordion title="House Rules">
                    <p><strong>Smoking:</strong> Strictly non-smoking indoors.</p>
                    <p><strong>Pets:</strong> Not allowed.</p>
                    <p><strong>Quiet Hours:</strong> 10:00 PM - 7:00 AM.</p>
                    <p><strong>Parties:</strong> Not permitted.</p>
                </Accordion>
                 <Accordion title="Other Amenities">
                    <p><strong>Air Conditioning:</strong> Remotes in each room. Please turn off when leaving.</p>
                    <p><strong>Smart TV:</strong> Use your own streaming account logins and remember to log out.</p>
                    <p><strong>Trash Disposal:</strong> Use communal bins on the street corner.</p>
                </Accordion>
            </SectionCard>
        </Screen>
    );
};


const GuideScreen = ({ isVisible }) => (
    <Screen isVisible={isVisible}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Insider's Guide to Kos</h1>
        
        <GuideCategory 
            icon={<CoffeeIcon className="w-8 h-8 text-yellow-700" />}
            title="Coffee & Bites"
            items={guideData.coffee}
            renderItem={item => (
                <>
                    <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                </>
            )}
        />

        <GuideCategory 
            icon={<UtensilsCrossedIcon className="w-8 h-8 text-red-600" />}
            title="Dining Recommendations"
            items={guideData.dining}
            renderItem={item => (
                 <>
                    <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                        <span className="text-xs bg-red-100 text-red-800 font-semibold px-2 py-0.5 rounded-full">{item.category}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                </>
            )}
        />

        <GuideCategory 
            icon={<LandmarkIcon className="w-8 h-8 text-stone-600" />}
            title="Historical Sites"
            items={guideData.history}
            renderItem={item => (
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-stone-700 ml-4 flex-shrink-0">{item.ticket}</span>
                </div>
            )}
        />

        <GuideCategory 
            icon={<WavesIcon className="w-8 h-8 text-cyan-500" />}
            title="Beaches"
            items={guideData.beaches}
            renderItem={item => (
                <div>
                    <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                        <span className="text-xs bg-cyan-100 text-cyan-800 font-semibold px-2 py-0.5 rounded-full">{item.distance}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
            )}
        />

        <GuideCategory 
            icon={<MountainSnowIcon className="w-8 h-8 text-green-700" />}
            title="Charming Villages"
            items={guideData.villages}
            renderItem={item => (
                <>
                    <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                </>
            )}
        />

    </Screen>
);

const TransportScreen = ({ isVisible }) => (
    <Screen isVisible={isVisible}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Around Kos</h1>
        <SectionCard icon={<CarIcon className="w-8 h-8 text-teal-500" />}>
            <h3 className="text-lg font-bold text-gray-800">Rental Car / Scooter / ATV</h3>
            <p>The best option for maximum freedom and flexibility. Numerous agencies are in Kos Town and at the airport. Book in advance during summer.</p>
        </SectionCard>
        <SectionCard icon={<CarIcon className="w-8 h-8 text-blue-500" />}>
            <h3 className="text-lg font-bold text-gray-800">KTEL Intercity Buses</h3>
            <p>An economical way to travel between towns. The main bus station is at 7 Kleopatras Street. Check schedules online as they vary.</p>
        </SectionCard>
        <SectionCard icon={<CarIcon className="w-8 h-8 text-yellow-500" />}>
            <h3 className="text-lg font-bold text-gray-800">Taxis</h3>
            <p>Readily available. Find them at ranks, hail them, or call a radio taxi service. Good to confirm the fare for long journeys. Kos Town Taxi: +30 22420 22777.</p>
        </SectionCard>
         <SectionCard icon={<CarIcon className="w-8 h-8 text-lime-500" />}>
            <h3 className="text-lg font-bold text-gray-800">Cycling</h3>
            <p>Kos is relatively flat, making cycling a great way to explore nearby areas like Lambi beach. Rentals are widely available.</p>
        </SectionCard>
    </Screen>
);

const InfoScreen = ({ isVisible }) => (
    <Screen isVisible={isVisible}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Important Information</h1>
        <SectionCard icon={<PhoneIcon className="w-8 h-8 text-red-500" />}>
            <InfoRow label="Universal Emergency" value="112" />
            <p className="text-sm text-gray-500 mt-2">Call for any emergency (Ambulance, Police, Fire). Operators speak English.</p>
             <InfoRow label="Ambulance" value="166" />
             <InfoRow label="Police" value="100" />
        </SectionCard>
        
        <SectionCard icon={<HomeIcon className="w-8 h-8 text-blue-500" />}>
            <InfoRow label="Host Contact" />
            <p className="text-lg text-center font-semibold text-gray-800 py-1">Varthakouris Ioannis</p>
            <InfoRow label="Phone / WhatsApp" value="+30 6944 589632" />
            <p className="text-sm text-gray-500 mt-2">WhatsApp/Viber is preferred for non-urgent queries between 9 AM and 8 PM.</p>
        </SectionCard>

        <SectionCard icon={<InfoIcon className="w-8 h-8 text-green-500" />}>
            <h3 className="text-lg font-bold text-gray-800">Nearby Essentials</h3>
             <InfoRow label="Supermarket" value="~1 min walk (AB)" />
             <InfoRow label="Pharmacies" value="Multiple in town" />
             <InfoRow label="ATMs" value="Multiple in town" />
        </SectionCard>

        <SectionCard icon={<LogOutIcon className="w-8 h-8 text-slate-500" />}>
            <h3 className="text-lg font-bold text-gray-800">Check-out</h3>
             <InfoRow label="Time" value="11:00 AM" />
             <InfoRow label="Keys">
                 <span className="text-gray-800 text-right">Leave on dining table</span>
             </InfoRow>
             <p className="text-sm text-gray-500 mt-2">Please ensure lights and A/C are off. We'd be grateful for a review on the platform you booked with!</p>
        </SectionCard>

    </Screen>
);


// Main App Component
export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    const renderScreen = () => {
        switch (activeTab) {
            case 'home':
                return <HomeScreen isVisible={true} />;
            case 'essentials':
                return <EssentialsScreen isVisible={true} />;
            case 'guide':
                return <GuideScreen isVisible={true} />;
            case 'transport':
                return <TransportScreen isVisible={true} />;
            case 'info':
                return <InfoScreen isVisible={true} />;
            default:
                return <HomeScreen isVisible={true} />;
        }
    };

    const NavItem = ({ id, icon, label }) => {
        const isActive = activeTab === id;
        return (
            <button
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
            >
                {icon}
                <span className="text-xs font-medium">{label}</span>
            </button>
        );
    };

    return (
        <div className="font-sans antialiased bg-slate-50" style={{ fontFamily: "'Inter', sans-serif" }}>
            <main>{renderScreen()}</main>
            
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t-md flex justify-around">
                <NavItem id="home" icon={<HomeIcon className="w-6 h-6 mb-1"/>} label="Welcome" />
                <NavItem id="essentials" icon={<KeyRoundIcon className="w-6 h-6 mb-1"/>} label="Essentials" />
                <NavItem id="guide" icon={<CompassIcon className="w-6 h-6 mb-1"/>} label="Guide" />
                <NavItem id="transport" icon={<CarIcon className="w-6 h-6 mb-1"/>} label="Transport" />
                <NavItem id="info" icon={<InfoIcon className="w-6 h-6 mb-1"/>} label="Info" />
            </nav>
        </div>
    );
}
