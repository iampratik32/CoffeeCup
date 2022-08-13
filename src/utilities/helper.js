const randomstring = require("randomstring")
const slugify = require('slugify')

exports.encode = (term) => {
    let uId = slugify(term, '-')
    uId.length > 50 ? uId = uId.substr(0, 49) : undefined
    return uId
}

exports.nepalCities = ["Achham", "Arghakhanchi", "Baglung", "Baitadi", "Bajhang", "Bajura", "Banke", "Bara", "Bardiya", "Bhaktapur", "Bhojpur", "Chitwan", "Dadeldhura", "Dailekh", "Dang", "Darchula", "Dhading", "Dhankuta", "Dhanusa", "Dolakha", "Dolpa", "Doti", "Gorkha", "Gulmi", "Humla", "Illam", "Jajarkot", "Jhapa", "Jumla", "Kailali", "Kalikot", "Kanchanpur", "Kapilvastu", "Kaski", "Kathmandu", "Kavrepalanchowk", "Khotang", "Lalitpur", "Lamjung", "Mahottari", "Makwanpur", "Manang", "Morang", "Mugu", "Mustang", "Myagdi", "Nawalpur", "Nuwakot", "Okhaldhunga", "Palpa", "Panchthar", "Parasi", "Parbat", "Parsa", "Pyuthan", "Ramechhap", "Rasuwa", "Rautahat", "Rolpa", "Eastern Rukum", "Western Rukum", "Rupandehi", "Salyan", "Sankhuwasabha", "Saptari", "Sarlahi", "Sindhuli", "Sindhupalchowk", "Siraha", "Solukhumbu", "Sunsari", "Surkhet", "Syangja", "Tanahun", "Taplejung", "Terhathum", "Udayapur"]

exports.createId = () => {
    return randomstring.generate({ length: 9, charset: 'numeric' })
}