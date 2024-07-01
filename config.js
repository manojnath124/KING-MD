const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '917005439105'
global.devs = '917005439105';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/beeb3a3685205fe18417b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'ᴍᴀɴᴏᴊ-xᴅ' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝑴𝑨𝑵𝑶𝑱-𝐒𝐄𝐑' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05NUGUyWXNDTGhoSXNHQVFRT0VXMTRzZDVVOUhtSGJqclpuMzN6NXlGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicC9qdC9vektWdTlvV053UjBOZURQNStHMU1TdlllNFkyeTNJZHJ5Rnd5RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR0ZJbHltZzBpVzJ3ZTNOQXl5NCttYkZHUTcrSmFsZS9qSGFVVjVES0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVM3FCcGdiaEpGenFXZFVUR3d1dFNOSmsvTlN0aGIveThGWnZabDZOS0RjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIM2Z5eGpXUXI0M3ZRaW1DZTFxRk5FN05IZm45K1R4QjdrbE01S0VqbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCWkhnWHovOW1GbXhZdURVM2NVNnovQnRGdXRuU2x3R1ZDKytmank0eDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0t3VVQyMU1CcVpYai93Qmhtb3NmVER4b29Ua2RpNEVFMnRVQ3ZTUmZXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDU4QkYrQnlHK2JBVG0xWUpWWXlKRjdiZndDYTBQMm9YNkFVWGRPVWpGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhZVGJxaEdDODVMM3ZvRjdZTnZCSjRZemt5emVuOUlPMUZNNW5iRkhsSktKTkNUYkRSSitvM0NoTi8xcU5xQmxkY0dZTVhUL3Z0dk1qSktySWN2T2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6Ikt6SmRSNlpzUXlPOVZoSDUrNmRRK3J4ZVFhMUI1ZnRVdW8xWnk1VHB4aWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVRZDZxa3dnUlpTTGFqT21EM19obmciLCJwaG9uZUlkIjoiNDc1ZjI4ODUtMTlhOC00MTU5LTllZGUtZTViMGQ4ZDU4MzIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kZXd6R2tZVHN3ZVg2U2grL0hTT2JlUVVUZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UnhXcVlQa2hwY29tK2ZIclpUYnFqa002QVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkw4RDI4Q0UiLCJtZSI6eyJpZCI6IjkxNzAwNTQzOTEwNTo5NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9ZZ0o0SEVKKzBpclFHR0JNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidW5ZNEtEZENKOTgremYwakZHb1VMNm9RNnpXSndmSG1uUzF2M1l5Ty9oaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicUVnOGJGRXpuSWlyZGUxZkFTRlRkTWl6ZnNrbnN6Qjl1a2JibDZkOTJNL3RIZnNEUThHNlQ4Q21DQy9mNDd3QXBvOXhnV2xvSEJBMEJkcngrRWdSQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjMwMXhDd1FDaVBtekZKV0VuUTZmb014Q2lOWXJXdXBNRFVEdHprenpjZkFGNWZNQnRQL1RVcjZ1QXFYL2d6NjZBMmkwMmJScjhYYVpHNFZ2U2VMcmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDA1NDM5MTA1Ojk2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJwMk9DZzNRaWZmUHMzOUl4UnFGQytxRU9zMWljSHg1cDB0YjkyTWp2NFoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk4MzUxODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTl2In0= : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'false' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'false' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'ᴍᴀɴᴏᴊ-xᴅ',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
