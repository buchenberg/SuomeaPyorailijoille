const vocabularyData = {
  "metadata": {
    "title": "Finnish Vocabulary for Bicycle Touring",
    "description": "Common Finnish words and phrases organized by category",
    "totalEntries": 130,
    "categories": ["greetings", "basics", "directions", "cycling", "camping", "food", "accommodation", "shopping", "emergencies", "social", "nature"]
  },
  "words": [
    {
      "category": "greetings",
      "items": [
        { "finnish": "Hei!", "english": "Hello!" },
        { "finnish": "Moi!", "english": "Hi!" },
        { "finnish": "Hyvää huomenta!", "english": "Good morning!" },
        { "finnish": "Hyvää päivää!", "english": "Good day!" },
        { "finnish": "Hyvää iltaa!", "english": "Good evening!" },
        { "finnish": "Hyvää yötä!", "english": "Good night!" },
        { "finnish": "Näkemiin!", "english": "Goodbye!" },
        { "finnish": "Moikka!", "english": "Bye!" },
        { "finnish": "Tervetuloa!", "english": "Welcome!" },
        { "finnish": "Hauska tavata!", "english": "Nice to meet you!" },
        { "finnish": "Näkemiin huomiseen!", "english": "See you tomorrow!" },
        { "finnish": "Hyvää viikonloppua!", "english": "Have a good weekend!" }
      ]
    },
    {
      "category": "basics",
      "items": [
        { "finnish": "Kyllä", "english": "Yes" },
        { "finnish": "Ei", "english": "No" },
        { "finnish": "Kiitos", "english": "Thank you" },
        { "finnish": "Eipä kestä", "english": "You're welcome" },
        { "finnish": "Anteeksi", "english": "Sorry / Excuse me" },
        { "finnish": "Ole hyvä", "english": "Here you go / You're welcome" },
        { "finnish": "Mitä?", "english": "What?" },
        { "finnish": "Missä?", "english": "Where?" },
        { "finnish": "Miten?", "english": "How?" },
        { "finnish": "Miksi?", "english": "Why?" }
      ]
    },
    {
      "category": "directions",
      "items": [
        { "finnish": "Missä on...?", "english": "Where is...?" },
        { "finnish": "Vasemmalle", "english": "To the left" },
        { "finnish": "Oikealle", "english": "To the right" },
        { "finnish": "Suoraan", "english": "Straight ahead" },
        { "finnish": "Käänny vasempaan", "english": "Turn left" },
        { "finnish": "Käänny oikeaan", "english": "Turn right" },
        { "finnish": "Jatka suoraan", "english": "Continue straight" },
        { "finnish": "Lähetä tästä", "english": "Start from here" },
        { "finnish": "Onko tämä oikea tie...?", "english": "Is this the right way to...?" },
        { "finnish": "Kuinka kaukana...?", "english": "How far is...?" }
      ]
    },
    {
      "category": "cycling",
      "items": [
        { "finnish": "Polkupyörä", "english": "Bicycle" },
        { "finnish": "Pyydän pyöräilyreittiä", "english": "I'd like a cycling route" },
        { "finnish": "Onko täällä pyöräteitä?", "english": "Are there bike paths here?" },
        { "finnish": "Missä on lähin huoltoasema?", "english": "Where is the nearest service station?" },
        { "finnish": "Tarvitsen apua pyörän kanssa", "english": "I need help with my bike" },
        { "finnish": "Renkaan puhkaisu", "english": "Flat tire" },
        { "finnish": "Ketju pojalta", "english": "Chain off" },
        { "finnish": "Jarrut eivät toimi", "english": "Brakes don't work" },
        { "finnish": "Ilmaa renkaisiin", "english": "Air for tires" },
        { "finnish": "Työkalut", "english": "Tools" },
        { "finnish": "Varrennas", "english": "Spare tube" },
        { "finnish": "Huoltopyörä", "english": "Support vehicle" },
        { "finnish": "Pyöräparkki", "english": "Bike parking" }
      ]
    },
    {
      "category": "food",
      "items": [
        { "finnish": "Nälkä", "english": "Hunger" },
        { "finnish": "Jano", "english": "Thirst" },
        { "finnish": "Ruokaa, kiitos", "english": "Food, please" },
        { "finnish": "Vettä, kiitos", "english": "Water, please" },
        { "finnish": "Kahvia, kiitos", "english": "Coffee, please" },
        { "finnish": "Olutta, kiitos", "english": "Beer, please" },
        { "finnish": "Missä on ravintola?", "english": "Where is a restaurant?" },
        { "finnish": "Kauppa", "english": "Shop / Store" },
        { "finnish": "Leipää", "english": "Bread" },
        { "finnish": "Juustoa", "english": "Cheese" },
        { "finnish": "Maitoa", "english": "Milk" },
        { "finnish": "Omenoita", "english": "Apples" },
        { "finnish": "Hyvää ruokahalua!", "english": "Bon appetit!" },
        { "finnish": "Lasku, kiitos", "english": "The bill, please" },
        { "finnish": "Suola", "english": "Salt" },
        { "finnish": "Pippuri", "english": "Pepper" }
      ]
    },
    {
      "category": "accommodation",
      "items": [
        { "finnish": "Missä on majoitus?", "english": "Where is accommodation?" },
        { "finnish": "Hotelli", "english": "Hotel" },
        { "finnish": "Hostelli", "english": "Hostel" },
        { "finnish": "Leirintäalue", "english": "Camping site" },
        { "finnish": "Vuokra-asunto", "english": "Rental apartment" },
        { "finnish": "Onko teillä vapaata huonetta?", "english": "Do you have a free room?" },
        { "finnish": "Paljonko maksaa?", "english": "How much does it cost?" },
        { "finnish": "Aamiainen sisältyy", "english": "Breakfast included" },
        { "finnish": "Sauna", "english": "Sauna" },
        { "finnish": "Kylpyhuone", "english": "Bathroom" }
      ]
    },
    {
      "category": "shopping",
      "items": [
        { "finnish": "Paljonko tämä maksaa?", "english": "How much does this cost?" },
        { "finnish": "Liian kallista", "english": "Too expensive" },
        { "finnish": "Voinko maksaa kortilla?", "english": "Can I pay by card?" },
        { "finnish": "Käteinen", "english": "Cash" },
        { "finnish": "Pienempi hinta", "english": "Lower price" },
        { "finnish": "Auki", "english": "Open" },
        { "finnish": "Suljettu", "english": "Closed" },
        { "finnish": "Elintarvikkeet", "english": "Groceries" },
        { "finnish": "Apteekki", "english": "Pharmacy" },
        { "finnish": "Posti", "english": "Post office" }
      ]
    },
    {
      "category": "emergencies",
      "items": [
        { "finnish": "Apua!", "english": "Help!" },
        { "finnish": "Soittakaa poliisi!", "english": "Call the police!" },
        { "finnish": "Soittakaa ambulanssi!", "english": "Call an ambulance!" },
        { "finnish": "Lääkäri", "english": "Doctor" },
        { "finnish": "Onnettomuus", "english": "Accident" },
        { "finnish": "Satutin itseni", "english": "I hurt myself" },
        { "finnish": "Olen sairas", "english": "I am sick" },
        { "finnish": "Varoitus", "english": "Warning" },
        { "finnish": "Vaarallista!", "english": "Dangerous!" },
        { "finnish": "Pysähdy!", "english": "Stop!" },
        { "finnish": "Hätänumero 112", "english": "Emergency number 112" },
        { "finnish": "Missä on sairaala?", "english": "Where is the hospital?" }
      ]
    },
    {
      "category": "social",
      "items": [
        { "finnish": "Mitä sinulle kuuluu?", "english": "How are you?" },
        { "finnish": "Hyvää, kiitos", "english": "Good, thank you" },
        { "finnish": "En ymmärrä", "english": "I don't understand" },
        { "finnish": "Ymmärrän", "english": "I understand" },
        { "finnish": "Puhutko englantia?", "english": "Do you speak English?" },
        { "finnish": "Puhu hitaammin", "english": "Speak more slowly" },
        { "finnish": "Nimeni on...", "english": "My name is..." },
        { "finnish": "Mikä sinun nimesi on?", "english": "What is your name?" },
        { "finnish": "Kippis!", "english": "Cheers!" },
        { "finnish": "Hyvää matkaa!", "english": "Have a good trip!" }
      ]
    },
    {
      "category": "camping",
      "items": [
        { "finnish": "Saanko leiriytyä täällä?", "english": "Can I camp here?" },
        { "finnish": "Onko täällä leirintäalue?", "english": "Is there a camping site here?" },
        { "finnish": "Teltta", "english": "Tent" },
        { "finnish": "Makuupussi", "english": "Sleeping bag" },
        { "finnish": "Retkeilykeitin", "english": "Camping stove" },
        { "finnish": "Tuli", "english": "Fire" },
        { "finnish": "Saa tehdä tulta?", "english": "Can I make a fire?" },
        { "finnish": "Vettä täytettäväksi", "english": "Refill water" },
        { "finnish": "Roska-astia", "english": "Trash bin" },
        { "finnish": "WC täällä?", "english": "Is there a toilet here?" },
        { "finnish": "Saunooko joku?", "english": "Is anyone using the sauna?" },
        { "finnish": "Yöpyminen", "english": "Overnight stay" },
        { "finnish": "Maksuton leirintä", "english": "Free camping" },
        { "finnish": "Everymansuoikeus", "english": "Right to roam" }
      ]
    },
    {
      "category": "nature",
      "items": [
        { "finnish": "Metsä", "english": "Forest" },
        { "finnish": "Järvi", "english": "Lake" },
        { "finnish": "Virta", "english": "River" },
        { "finnish": "Saari", "english": "Island" },
        { "finnish": "Ranta", "english": "Beach / Shore" },
        { "finnish": "Vuori", "english": "Mountain" },
        { "finnish": "Polku", "english": "Trail / Path" },
        { "finnish": "Maisema", "english": "Landscape / View" },
        { "finnish": "Kaunis", "english": "Beautiful" },
        { "finnish": "Rauhallinen", "english": "Peaceful / Quiet" },
        { "finnish": "Aurinko", "english": "Sun" },
        { "finnish": "Sade", "english": "Rain" },
        { "finnish": "Tuuli", "english": "Wind" }
      ]
    }
  ]
};
