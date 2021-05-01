const replies = ['Hello there 🖖🖖', 'Yo Yo 🤳', 'Ding Dong❌❗❗❌']
    
module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.reply(replies[index]);
};



