// Response for Uptime Robot
const http = require('http');
const CronJob = require('cron').CronJob;
const TECH_LEAD_COMMENTS = [
  "うるせぇ", 
  "お前ならできるで。", 
  "まあ俺Googleやめたけどな。", 
  "結局YouTuberが一番やで。", 
  "たまにはLeetCodeだけじゃなくてPornHubもみろよ",
  "俺はLeetCode5億問やった。",
  "今日頑張れば、明日はどや顔できるんやで。"
]
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now \n');
}).listen(3000);

// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message =>
{
	console.log('bot is ready!');
});


client.on('message', message =>
{
	if(message.isMemberMentioned(client.user))
	{
		message.reply(TECH_LEAD_COMMENTS[Math.floor(Math.random() * TECH_LEAD_COMMENTS.length)]);
		return;
	}
  
  if(message.content.match('こんにちは')){
    message.reply('うるせぇ')
    return;
  }

});

if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN ).then(() => {
    console.log("I am ready");
    const general = client.channels.get('698859308523323466')
    const jobOne = new CronJob('00 00 09 * * 1-5', function() {
      general.send('おはよう。今日もお前らなら頑張れるで。さっさと顔洗ってleetcodeやで。');
    }, null, true, 'Australia/Brisbane');
    // const jobTwo = new CronJob('00 30 12 * * 1-5', function() {
    //   general.send('もう12時半やで。leetcodeしような。');
    // }, null, true, 'Australia/Brisbane');
    const jobThree = new CronJob('00 00 22 * * 1-5', function() {
      general.send('あー今日もよく積み上げた。え、まだleetcodeやってないやつおるん？');
    }, null, true, 'Australia/Brisbane');
  const jobFour = new CronJob('00 59 23 * * 1-5', function() {
      general.send('みんなよくがんばったな。お前ら大好きやで。はよ寝ろよ。');
    }, null, true, 'Australia/Brisbane');
    jobOne.start();
    // jobTwo.start();
    jobThree.start();
    jobFour.start();
});