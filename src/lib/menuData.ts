export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  isNew?: boolean;
  servingNote?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  image: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters & Salads',
    image: '/gallery_refined/authentic_dish_3.png',
    items: [
      { name: 'The Classic Caesar Salad', description: 'Baby romaine, Caesar dressing, anchovies, poached egg, home cured bacon, grilled chicken skewer, garlic croutons, parmesan' },
      { name: 'Seaview Salad', description: 'Parma ham, parmesan, soft boiled egg, romaine & iceberg, herb garlic croutons — choice of thousand island or herb balsamic vinaigrette' },
      { name: 'Crispy Mini Chicken Wings', description: 'Deep-fried mini wings, house-made chips — choice of honey glaze, tamarind, garlic parmesan, or BBQ sauce' },
      { name: 'The Fried of Cebu', description: '3 spring rolls: seafood (prawn, squid, lobster ball) · pork (ground pork, turnips, carrots) · vegetable (beansprouts, chayote, corn, cheese)' },
      { name: 'Ceviche or Kinilaw sa Opon', description: 'Raw Spanish mackerel, coconut mayo foam, spiced vinegar pearls, crispy anchovies' },
      { name: 'Tamago Calamari Rings', description: 'Coated calamari rings, potato chips, aioli & lemon dip' },
      { name: 'Big Fish and Chips', description: 'Battered Spanish mackerel, spiced potato chips — choice of lemon butter or lemon caper tartar sauce' },
      { name: 'Nobashi Ebi No Tempura', description: 'Nobashi shrimps, tempura sauce, grated daikon radish, pickled ginger' }
    ]
  },
  {
    id: 'soups',
    title: 'Soups',
    image: '/gallery_refined/authentic_dish_7.png',
    items: [
      { name: 'Olango Seafood Chowder', description: 'Creamy seafood broth, herbs, onion, celery, potatoes, fresh seafoods — served with soft roll bread', servingNote: 'To share for four' },
      { name: 'Crab Meat and Corn Soup', description: 'Cream of corn, crab meat, silken tofu, vegetables — served with soft roll bread', servingNote: 'To share for four' },
      { name: 'Sinigang na Hipon or Baboy', description: 'Traditional tamarind broth, tiger prawns or pork belly, vegetables', servingNote: 'To share for four' },
      { name: 'Tinolang Isda na Tangigue', description: 'Local fish soup, organic vegetables, herbs and spices', servingNote: 'To share for four' },
      { name: 'Tinolang Manok Bisaya', description: 'Native chicken, green papaya, malunggay, chayote, herbs & spices', servingNote: 'To share for four' },
      { name: 'Pochero Cebu', description: 'Beef shank soup, bamboo shoot, cabbage, baby corn cob', servingNote: 'To share for four' }
    ]
  },
  {
    id: 'chicken',
    title: 'Chicken',
    image: '/gallery_refined/authentic_dish_4.png',
    items: [
      { name: 'Teri-Chicken', description: 'Grilled Japanese teriyaki chicken, scallion salad, roasted sesame seeds' },
      { name: 'Thai Chicken Curry', description: 'Yellow curry paste, lemongrass, eggplant, coconut milk, chicken thigh' },
      { name: 'Spicy Gochujang Stir Fried Chicken', description: 'Tender chicken bites in sweet spicy savory gochujang sauce' },
      { name: 'Buttered Fried Chicken', description: 'Deep-fried chicken thigh — choice of gravy or cheesy lava sauce' },
      { name: 'Chicken & Pork Adobo', description: 'Braised in vinegar, soy sauce, herbs and spices — served with Bantayan Island\'s unsalted danggit', servingNote: 'To share for three' }
    ]
  },
  {
    id: 'pork',
    title: 'Pork',
    image: '/gallery_refined/authentic_dish_8.png',
    items: [
      { name: 'Wok Fried Pork Belly with Pineapple', description: 'Hong Kong-style pork belly, pineapple, sweet & sour sauce' },
      { name: 'Liempo Paborito', description: 'Grilled pork belly, herbs, spices, soy, calamansi, atchara, pinya salsa' },
      { name: 'Crispy Pork Belly "Lechon Carajay"', description: 'Marinated air-dried pork belly, deep-fried, calamansi, soy, chili, atchara' },
      { name: 'Crispy Pataron', description: 'Pork knuckle, slow poached then crispy fried, native soy vinegar, atchara', servingNote: 'To share for four' },
      { name: 'Pata Tim', description: 'Chinese-style braised pork leg, sweet savory sauce, bokchoy — served with fried mantou', servingNote: 'To share for three' },
      { name: 'Cebuano Lechon Roll, Puto at Dinuguan', description: 'Pork belly oven-roasted / pork blood, broiled pork mask, ground pork', servingNote: 'To share for three' }
    ]
  },
  {
    id: 'beef',
    title: 'Beef',
    image: '/gallery_refined/authentic_dish_2.png',
    items: [
      { name: 'Bistek Tagalog', description: 'Local beef simmered in soy sauce, vinegar, calamansi' },
      { name: 'Beef Stroganoff', description: 'U.S. Angus beef, onion, garlic, mushrooms, cream — served with steamed rice' },
      { name: 'Cured Beef Salpicado', description: 'U.S. tenderloin tips, roasted garlic chips, olive oil, salpicado sauce, chili flakes — served with steamed rice' },
      { name: 'Sizzling Pochero', description: 'Tender beef shank, special butter brown sauce, sizzling plate', servingNote: 'To share for three' }
    ]
  },
  {
    id: 'marina-seafood-special',
    title: 'Marina Seafood Special',
    image: '/gallery_refined/authentic_dish_14.png',
    items: [
      { name: 'Baked Scallops', description: 'Cheese, béchamel, garlic butter confit, herbs & spices, golden garlic bits' },
      { name: 'Gambas Al a Jillo', description: 'Sautéed sea shrimp, mushroom, parsley, olive oil and garlic' },
      { name: 'Paksiw na Tangigue', description: 'Spanish mackerel, simmered, vinegar, lemon grass, ginger, garlic', isNew: true },
      { name: 'Spanish Mackerel Steak', description: 'Pan-seared, organic root vegetable in creamy lemon butter chive sauce — served with steamed rice' },
      { name: 'White Snapper Fish in Local Curry Ginger Sauce', description: 'Pan-seared, fresh ginger, local curry sauce — served with steamed rice', isNew: true },
      { name: 'Salmon Paksiw', description: 'Norwegian king salmon, vinegar, green mango, coconut milk, local herbs & spices, adobo oil' },
      { name: 'Steamed Fish', description: 'Hunan chili, ginger soy sauce, sesame oil, shaoxing rice wine, coriander — choice of Pompano or Garoupa — steamed rice' },
      { name: 'Fish "Escabeche"', description: 'Native sweet & sour tangy sauce, pepper, spring onion — choice of Pompano or Garoupa — steamed rice' },
      { name: 'Golden Fried Fish', description: 'Pineapple sweet and sour sauce — choice of Pompano or Garoupa — steamed rice' },
      { name: 'Pompano Al a Pobre', description: 'Braised pomfret, garlic confit, mushroom, capsicum, oyster sauce — steamed rice' },
      { name: 'Pinais na Hipon sa Gata at Aligue', description: 'Jumbo shrimps, coco gravy, spices, herbs', servingNote: 'To share for three' },
      { name: 'Pan-Seared Salmon', description: 'Herb marinated Norwegian king salmon, grilled corn, French beans, Beurre blanc sauce — choice of rice/fries/mash' },
      { name: 'Seafood Curry Adobado', description: 'Shrimps, squid, mackerel, thai curry paste, lime, coco cream, lobster ball, scallops' },
      { name: 'Seafood Kare-Kare', description: 'Squid, shrimps, scallop meat, mackerel, peanut annatto gravy, house-made sautéed shrimp paste' },
      { name: 'Seafood Caldereta', description: 'Squid, shrimps, scallop meat, mackerel, tomato jus, fried banana, sweet potato, carrots' },
      { name: 'Pacific Blue Crabs', description: '3 ways: Singaporean Chili / Salted Egg / Garlic Butter', servingNote: 'To share for three' },
      { name: 'Cajun Seafood Boil', description: 'Squid, clams, shrimps, scallops, neck clams, sweet corn & potato, Cajun spice butter', servingNote: 'To share for three' },
      { name: 'Fritos de Marina', description: 'Calamari, shrimp tempura, fish garoupa, lechon Carajay, chicken wings, pork lumpia — includes pork sinigang soup, steamed rice & iced tea', servingNote: 'To share for four' },
      { name: 'Fresh Seafood Selection', description: 'Pacific blue crabs, squid, prawns, scallops, mackerel, steamed vegetables, atchara — includes steamed rice & iced tea', servingNote: 'To share for four' },
      { name: 'Sutukil de Marina', description: 'Grilled squid, mackerel, scallops, prawns, chicken & pork belly, eggplant, okra, kinilaw na guso, atchara — includes mixed seafood soup, steamed rice & iced tea', servingNote: 'To share for four' }
    ]
  },
  {
    id: 'off-the-grill',
    title: 'Off-the-Grill',
    image: '/gallery_refined/authentic_dish_15.png',
    items: [
      { name: 'Pork Sisig', description: 'Broiled pork mask, organic herb and spice' },
      { name: 'Tuna Panga', description: 'Grilled marinated tuna panga, atchara, native sauce, scallion salad' },
      { name: 'Tuna Belly Buster', description: 'Grilled tuna belly, atchara, native sauce, scallion salad' },
      { name: 'Sizzling Boneless Bangus', description: 'Milkfish, deboned, marinated in local vinegar soy sauce, sizzled with fermented soy sauce — steamed rice', isNew: true },
      { name: 'Grilled Pork Chop Steaks', description: 'Prime cut pork steak, pepper sour cream sauce, buttered vegetables — choice of rice/fries/mash' },
      { name: 'Char-Grilled Pork Ribs', description: 'Tender pork ribs, house-made BBQ sauce, grilled corn, buttered vegetables — steamed rice' },
      { name: 'Sizzling Squid', description: 'Stuffed squid, lemongrass adobo sauce, garlic chips, shallots — steamed rice' },
      { name: 'Seafood Kebab', description: 'Skewered shrimp & mackerel, dry rub, pepper cream sauce, vegetables — choice of rice/fries/mash' },
      { name: 'U.S. Prime Beef Angus Rib Eye (450g)', description: 'Herb marinated, pepper jus, organic root vegetables — choice of rice/fries/mash' }
    ]
  },
  {
    id: 'vegetables-noodles',
    title: 'Vegetables & Noodles',
    image: '/gallery_refined/authentic_dish_11.png',
    items: [
      { name: 'Pansit Espesyal', description: 'Stir-fried egg noodles, mixed seafood, meat and garden vegetables' },
      { name: 'Crispy Pansit Canton', description: 'Fried egg noodles, shrimps, chicken inasal, fish ball, quail egg, ear wood mushroom, omelet' },
      { name: 'Cebuano Bam-i', description: 'Mixed noodles, mixed meat and garden vegetables' },
      { name: 'Sisig Tortang Talong', description: 'Charred eggplant omelette, pork mask sisig, salted egg, crispy shallots' },
      { name: 'Nilaing na Puso sa Saging', description: 'Banana heart, coconut milk, chili labuyo, lemon grass, garlic, onion', isNew: true },
      { name: 'Stir-Fried Seasonal Vegetables', description: 'Broccoli, cauliflower, mushrooms, young corn, capsicums, sesame oil' },
      { name: 'Wok-Tossed Seafoods and Vegetables', description: 'Fresh mixed seafoods, organic vegetables, sesame oil, golden garlic, light sweet soy' }
    ]
  },
  {
    id: 'handhelds-tacos',
    title: 'Handhelds, Tacos & Nachos',
    image: '/gallery_refined/authentic_dish_1.png',
    items: [
      { name: 'Buenos Nachos con Queso Fundido', description: 'Molten trio queso, pimiento, cerveza and masa chips' },
      { name: 'Nachos Carnitas', description: 'Carne asada, masa chips, trio queso, salsa roja, crema and pickled jalapenos' },
      { name: 'Chorizo de Cebu Tacos', description: 'Crumbled local chorizo, chipotle peppers, cilantro, taco sauce, house-made taco shells', isNew: true },
      { name: 'Tabanero Chicken Quesadilla', description: 'Grilled chicken thigh, masa tortilla, cheddar, pico de gallo, crema, cilantro' },
      { name: 'Mulitas Beef & Jalapenos Quesadilla', description: 'Chili con carne asada, masa tortilla, cheddar, pico de gallo, crema, cilantro' },
      { name: 'Clubhouse Sandwich', description: 'Grilled chicken fillet, fried bacon, tomato mayonnaise, sliced bread' },
      { name: 'Seafood Burger', description: 'Mixed seafood patty, cheese, squid ink house-made bun, french fries, ketchup', isNew: true },
      { name: 'Cheesy Beef Burger', description: 'Pure beef patty, cheese, bacon, multigrain bun, French fries, ketchup' }
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    image: '/gallery_refined/authentic_dish_13.png',
    items: [
      { name: 'Margherita', description: 'Tomato fondue, fresh basil, mozzarella' },
      { name: 'Ham and Pineapple', description: 'Ham, pineapple, bell pepper, white onions, mozzarella' },
      { name: 'Supremo Overload', description: 'Meat, mozzarella, parmegiano, herbs tomato fondue' },
      { name: 'Seafood Pizza', description: 'Bechamel sauce, mozzarella, parmegiano, olives, aromatic herbs' }
    ]
  },
  {
    id: 'pastabilities',
    title: 'Pastabilities',
    image: '/gallery_refined/authentic_dish_12.png',
    items: [
      { name: 'Creamy Carbonara', description: 'Bacon, cream sauce, pasta' },
      { name: 'Aglio Olio', description: 'Pasta, olive oil, garlic, shrimp' },
      { name: 'Spaghetti Ragu Bolognese', description: 'Meat ragout, tomato, parmesan cheese, fresh basil' }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    image: '/gallery_refined/marina_interior_8.png',
    items: [
      { name: 'Masareal Sorbetes', description: 'Cebuano masareal delicacy transformed into refreshing sorbetes' },
      { name: 'Biko Turon', description: 'Biko, banana, sweet langka, ube and latik' },
      { name: 'Rosquillos Calamansi Mango Cheese Cake', description: 'Mango, calamansi, cream cheese, salted caramel, berries compote' },
      { name: 'Warm Cacao Pudding with Masareal Ice Cream', description: 'Native tablea, egg yolk, sugar, flour, scoop of masareal ice cream', isNew: true },
      { name: 'Crepe ala Marina', description: '3 pieces crepe, triple sec — choice of Mango or Caramelized Banana filling and Chocolate/Vanilla/Strawberry syrup', isNew: true },
      { name: 'Halo Halo', description: 'Shaved ice, Filipino jelly, beans, evaporated milk, ube jam, sorbetes, leche flan, barquillos' },
      { name: 'Mini Cake of the Day (4 Assorted Flavors)', description: 'Rotating selection of four mini cakes', servingNote: 'To share for two' },
      { name: 'Fresh Seasonal Fruit Platter', description: '' },
      { name: 'Cake of the Day', description: 'Ask your server for today\'s selection' },
      { name: 'Tea Time', description: 'Mini Cake (4 flavors) + choice of tea / with 2 coffees or 1 cocktail', servingNote: 'To share for two' }
    ]
  }
];
