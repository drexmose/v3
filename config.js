const fs = require('fs')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

global.d = new Date()
global.calender = d.toLocaleDateString('id')

    //General Settings 
global.apikey = 'ptla_aORomnjMxKbutwJmXJmaB9bPORK7I0NyjAIxxtwhMCr' //Ganti pake apikey panel lu
global.capikey = 'ptlc_U5fwq86umF5wiwy8cI2VwTcP5jqBCi4X9KYmNW4o8X2' //Ganti Pake Capikey Panel Lu
global.domain = 'https://order.jasavirtex.pro'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu
global.prefa = ['','!','.',',','🐤','🗿']
global.Contributor = '629999999999','','',
global.NamaOwner = 'toxic your god' //gausah diganti 
global.sessionName = 'session'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'ZxV V3' //ganti aj klo mau
global.author = 'thezetsuboxygen' //ganti aj klo mau
global.packname = 'ZxV V3' //ganti aj klo mau
global.gc = 'https://chat.whatsapp.com/BwRV8AScY7XKItv4dW3sra' //gausah diganti
global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`

global.country = `62`

global.system = {
    gmail: `zxvclientsupp@gmail.com`,
}

   //Respon
global.mess = { // bagian ini gausah diganti 
    ingroup: 'Gabisa lah kocak, Fitur ini khusus untuk group💢',
    admin: '❗Lu Bukan Admin Bego, Lu Gabakal Bisa Make Fitur Ini. Awokawokawok 😝',
    owner: 'Waduhh! ,Lu bukan owner gw bg🗣️',
    premium: 'You are not a premium user, Lu gabisa akses fitur ini karna lu bukan premium, aowkawokawok🐦',
    seller: 'Lu bukan seller, Jadi gabakal bisa make😹',
    usingsetpp: 'Setpp hanya bisa dipake owner, lu kira gw bego? 🤓',
    wait: 'Tunggu sedang diproses🕙',
    succes: '🌆Sukses Sayaang😆',
    bugrespon: '> 🌆Sukses Send Bug, Wajib Jeda 1 Menit'
}

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})