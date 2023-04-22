module.exports = {
    name: "imagine",
    description: "Create AI images for free",
    usage: "",
    category: "info",
    userPerms: [""],
    botPerms: [""],
    cooldown: 0,
    guildOnly: false,
    ownerOnly: false,
    toggleOff: false,
    nsfwOnly: false,
    maintenance: false,
    options: [{ name: "prompt", description: "Add promt to make image", type: 3, required: true }],
    type: 1,
    run: async (n, a) => {
        try {
const _0x19d375=_0x2b5c;function _0x2e96(){const _0x3e82ca=['58682kJmRpN','reply','length','2207800VmzjAH','1567755eCVeMD','Unabled\x20to\x20generate\x20images\x20😭.','options','810540UfdsUi','setAuthor','62870zjnoEu','30354CqCiqa','midjourney-client','Our\x20image\x20generator\x20is\x20working\x20hard,\x20and\x20it\x20may\x20take\x20up\x20to\x207\x20seconds\x20to\x20produce\x20the\x20desired\x20output','aHR0cHM6Ly9kaXNjb3JkLmdnL3VvYWlv','10gimTwP','351dQYYkI','editReply','797763qCswEZ','substring','prompt','setImage','getString','...','515SHqKfX'];_0x2e96=function(){return _0x3e82ca;};return _0x2e96();}function _0x2b5c(_0x239590,_0xb7ba82){const _0x2e96f0=_0x2e96();return _0x2b5c=function(_0x2b5c53,_0x341672){_0x2b5c53=_0x2b5c53-0x136;let _0x40b119=_0x2e96f0[_0x2b5c53];return _0x40b119;},_0x2b5c(_0x239590,_0xb7ba82);}(function(_0x36aba3,_0x5ecaf9){const _0x16c099=_0x2b5c,_0x21b50f=_0x36aba3();while(!![]){try{const _0x465656=-parseInt(_0x16c099(0x148))/0x1*(-parseInt(_0x16c099(0x13a))/0x2)+-parseInt(_0x16c099(0x14b))/0x3+parseInt(_0x16c099(0x141))/0x4+-parseInt(_0x16c099(0x139))/0x5*(-parseInt(_0x16c099(0x144))/0x6)+parseInt(_0x16c099(0x13e))/0x7+-parseInt(_0x16c099(0x13d))/0x8+-parseInt(_0x16c099(0x149))/0x9*(parseInt(_0x16c099(0x143))/0xa);if(_0x465656===_0x5ecaf9)break;else _0x21b50f['push'](_0x21b50f['shift']());}catch(_0x2edbe5){_0x21b50f['push'](_0x21b50f['shift']());}}}(_0x2e96,0x6ed6e));const {default:r}=await import(_0x19d375(0x145)),o=a[_0x19d375(0x140)][_0x19d375(0x137)](_0x19d375(0x14d));let t=o[_0x19d375(0x14c)](0x0,0x23)+_0x19d375(0x138);await a[_0x19d375(0x13b)]({'content':_0x19d375(0x146),'ephemeral':!![]}),r(o)['then'](_0x22c998=>{const _0x34c3f1=_0x19d375;(_0x22c998[_0x34c3f1(0x13c)]==0x0||!_0x22c998)&&a[_0x34c3f1(0x14a)](_0x34c3f1(0x13f)),a[_0x34c3f1(0x14a)]({'content':null,'embeds':[n['Embed']()[_0x34c3f1(0x136)](_0x22c998[0x0])[_0x34c3f1(0x142)]({'name':''+t,'url':atob(_0x34c3f1(0x147))})]});});
        } catch (e) {
            n.slash_err(n, a, e);
        }
    },
};
