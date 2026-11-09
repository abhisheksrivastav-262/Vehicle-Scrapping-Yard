import { business } from '@/data/site';
export const pageMeta: Record<string,{title:string;description:string}> = {
  home:{title:'Vehicle Scrapping Yard in Gwalior | Responsible Recycling',description:'Vehicle and industrial scrap services in Gwalior, Madhya Pradesh. Enquire about vehicle evaluation, collection and material recovery.'},
  services:{title:'All Scrap Services | Vehicle Scrapping Yard Gwalior',description:'Browse all vehicle, factory and metal scrap services with direct enquiry forms in Gwalior.'},
  about:{title:'About Us | Vehicle Scrapping Yard Gwalior',description:'Learn about Vehicle Scrapping Yard, our responsible recycling mission and services in Gwalior.'},
  'vehicle-scrapping':{title:'Vehicle Scrapping Services in Gwalior',description:'Enquire about car, bike, truck, bus and scooty scrapping in Gwalior and nearby areas.'},
  'industrial-scrap':{title:'Industrial & Metal Scrap Services | Gwalior',description:'Factory, metal, battery, aluminium, copper, cable and paper scrap enquiries in Gwalior.'},
  'how-it-works':{title:'How Vehicle Scrapping Works | Gwalior',description:'Understand the enquiry, assessment, collection, handover and recycling process.'},
  compliance:{title:'Vehicle Documentation & Compliance',description:'Clear information about vehicle handover, RC cancellation assistance and documentation.'},
  gallery:{title:'Scrapping & Recycling Gallery',description:'Illustrative images of vehicle scrapping and industrial recycling activities.'},
  faq:{title:'Frequently Asked Questions | Vehicle Scrapping Yard',description:'Answers about scrapping, vehicle documents, collection, valuation and industrial scrap.'},
  contact:{title:'Contact Vehicle Scrapping Yard | Gwalior',description:'Call, email or visit Vehicle Scrapping Yard in Shankarpur, Gwalior, Madhya Pradesh.'},
  'request-pickup':{title:'Request Vehicle Pickup & Scrap Quote | Gwalior',description:'Send Vehicle Scrapping Yard your vehicle or scrap details for an enquiry.'},
  'privacy-policy':{title:'Privacy Policy | Vehicle Scrapping Yard',description:'How enquiry information submitted to Vehicle Scrapping Yard is handled.'},
  terms:{title:'Terms of Use | Vehicle Scrapping Yard',description:'Terms for using the Vehicle Scrapping Yard website and enquiry forms.'},
};
export const canonical = (slug:string) => `https://vehiclescrapping.in/${slug}`;
export const localBusinessJsonLd = { '@context':'https://schema.org','@type':'LocalBusiness',name:business.name,telephone:business.callPhone,email:business.email,address:{'@type':'PostalAddress',streetAddress:'Shankarpur, Opp. Cricket Stadium',addressLocality:'Gwalior',addressRegion:'Madhya Pradesh',postalCode:'474010',addressCountry:'IN'},areaServed:'Gwalior and nearby areas'};
