let fullName = prompt("Ad və soyadınızı 'AD SOYAD' kimi daxil edin:");
let nameParts = fullName.split(" ");
let reverseName = nameParts[1] + " " + nameParts[0];


console.log(reverseName);
