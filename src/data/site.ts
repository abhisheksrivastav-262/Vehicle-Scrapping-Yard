export const business = {
  name: 'Vehicle Scrapping Yard', callPhone: '+91 94251 95816', callPhoneRaw: '919425195816', whatsappPhone: '+91 94251 95826', whatsappPhoneRaw: '919425195826', email: 'hqureshi351@yahoo.com',
  address: 'Shankarpur, Opp. Cricket Stadium, Gwalior, Madhya Pradesh, India – 474010', city: 'Gwalior',
};
export const routes = [
  ['','Home'],['about','About'],['vehicle-scrapping','Vehicle Scrapping'],['industrial-scrap','Industrial Scrap'],['how-it-works','How It Works'],['compliance','Compliance'],['gallery','Gallery'],['faq','FAQ'],['contact','Contact'],['request-pickup','Get a Quote'],
] as const;
export const vehicleServices = [
  {title:'Car Scrap', image:'/images/car-scrapping.webp', text:'End-of-life, old and accident-damaged cars handled with care, with material recovery in mind.'},
  {title:'Bike Scrap', image:'/images/bike-scrapping.webp', text:'Collection and responsible dismantling for old or damaged motorcycles.'},
  {title:'Truck Scrap', image:'/images/truck-scrapping.webp', text:'Scrapping enquiries for commercial trucks and industrial vehicles.'},
  {title:'Bus Scrap', image:'/images/bus-scrapping.webp', text:'Commercial bus dismantling enquiries and recoverable material sorting.'},
  {title:'Scooty Scrap', image:'/images/scooty-scrapping.webp', text:'Old and damaged scooters assessed for collection and material recovery.'},
];
export const industrialServices = [
  ['Factory Scrap','Industrial machinery, factory metal waste and equipment scrap.','/images/factory-scrap.webp'],
  ['Metal Scrap','Iron, steel and mixed metal scrap collection enquiries.','/images/metal-scrap.webp'],
  ['Battery Scrap','Used automotive batteries and eligible industrial battery enquiries.','/images/battery-scrap.webp'],
  ['Aluminium Scrap','Aluminium components and industrial aluminium material recovery.','/images/aluminium-scrap.webp'],
  ['Copper Scrap','Copper scrap and industrial copper material recovery enquiries.','/images/copper-scrap.webp'],
  ['Copper Cable Scrap','Electrical cable scrap assessed for responsible material recovery.','/images/copper-cable.webp'],
  ['Paper Scrap','Commercial paper, cardboard and industrial paper waste collection enquiries.','/images/paper-scrap.webp'],
] as const;
export const allServices = [...vehicleServices,...industrialServices.map(([title,text,image])=>({title,text,image}))];
export const faqItems = [
 ['What is vehicle scrapping?','Vehicle scrapping is the careful dismantling of an end-of-life vehicle and separation of materials for appropriate recovery and recycling.'],
 ['Which vehicles can be scrapped?','We accept enquiries for cars, bikes, scooters, trucks, buses, SUVs, vans and other commercial vehicles. Eligibility and collection depend on the vehicle and location.'],
 ['Do you accept old cars?','Yes. Contact us with the make, model, year, condition and location so we can discuss assessment and next steps.'],
 ['Do you accept accident-damaged vehicles?','You can enquire about accident-damaged vehicles. Share photos and vehicle details for an initial discussion.'],
 ['Do you provide doorstep vehicle pickup?','Pickup may be arranged in Gwalior and nearby areas, subject to vehicle, access and availability. Please confirm when you enquire.'],
 ['Which areas do you serve?','Our primary service location is Gwalior and nearby areas in Madhya Pradesh. Ask us about your specific location.'],
 ['How is the scrap vehicle price calculated?','A quotation depends on vehicle type, make, model, condition, completeness, location and prevailing material considerations. We do not publish fixed rates.'],
 ['What documents are required?','Requirements depend on the vehicle and applicable process. Usually, ownership and registration details are needed for discussion; we will guide you on the documents relevant to your case.'],
 ['How does RC cancellation work?','RC cancellation is handled under applicable RTO rules and authorized facility procedures. We can explain the assistance available for your case; final processing rests with the relevant authority.'],
 ['What is a Certificate of Deposit?','A Certificate of Deposit (CoD) is associated with vehicle scrapping through an authorized facility under applicable rules. Availability and issuance depend on that facility and process.'],
 ['Do you accept commercial vehicles?','Yes, enquiries are welcome for trucks, buses, vans and other commercial vehicles.'],
 ['Do you purchase factory scrap?','We accept enquiries for factory machinery, equipment and industrial metal scrap. Details and quantities help us assess the request.'],
 ['Do you accept aluminium and copper scrap?','Yes, we accept enquiries for aluminium, copper and copper cable scrap. Share the material type, quantity and location.'],
 ['How can I request a scrap quotation?','Use the Get a Quote form, call us, email, or message us on WhatsApp with the relevant details.'],
 ['How can I contact Vehicle Scrapping Yard?','Call +91 94251 95816, email hqureshi351@yahoo.com, or visit us at Shankarpur, Opp. Cricket Stadium, Gwalior.'],
] as const;
export const quoteOptions = ['Car Scrap','Bike Scrap','Truck Scrap','Bus Scrap','Scooty Scrap','Factory Scrap','Metal Scrap','Battery Scrap','Aluminium Scrap','Copper Scrap','Copper Cable Scrap','Paper Scrap'];
const serviceImageMap:Record<string,string> = {
 'photo-1492144534655-ae79c964c9d7':'/images/car-scrapping.webp','photo-1486262715619-67b85e0b08d3':'/images/car-scrapping.webp',
 'photo-1558981806-ec527fa84c39':'/images/bike-scrapping.webp','photo-1519003722824-194d4455a60c':'/images/truck-scrapping.webp',
 'photo-1570125909232-eb263c188f7e':'/images/bus-scrapping.webp','photo-1581091226825-a6a2a5aee158':'/images/factory-scrap.webp',
 'photo-1567789884554-0b844b597180':'/images/metal-scrap.webp','photo-1619642751034-765dfdf7c58e':'/images/battery-scrap.webp',
 'photo-1615811361523-6bd03d7748e7':'/images/aluminium-scrap.webp','photo-1621905251918-48416bd8575a':'/images/copper-scrap.webp',
 'photo-1558618666-fcd25c85cd64':'/images/copper-cable.webp','photo-1531058020387-3be344556be6':'/images/paper-scrap.webp',
 'photo-1532601224476-15c79f2f7a51':'/images/factory-scrap.webp','photo-1473341304170-971dccb5ac1e':'/images/paper-scrap.webp',
 'photo-1504307651254-35680f356dfd':'/images/factory-scrap.webp','photo-1450101499163-c8848c66ca85':'/images/metal-scrap.webp',
 'photo-1532996122724-e3c354a0b15b':'/images/paper-scrap.webp','photo-1521791136064-7986c2920216':'/images/factory-scrap.webp',
 'photo-1511919884226-fd3cad34687c':'/images/truck-scrapping.webp'
};
export const imageUrl = (id:string,_width=1000) => id.startsWith('/') ? id : (serviceImageMap[id] || '/images/metal-scrap.webp');
