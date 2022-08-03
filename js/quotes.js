const quotes = [
    {
        quote:"우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
        author:"Gloria Pitzer",
    },
    {
        quote:"인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다 먼저 자신의 내면을 살펴야 한다.",
        author: "Wally 'Famous' Amos",
    },
    {
        quote:"할 수 있는 자는 행한다. 할 수 없는 자는 가르친다",
        author: "George Bernard Shaw",
    },
    {
        quote:"행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author: "Genghis Khan",
    },
    {
        quote:"우연이 아닌 선택이 운명을 결정한다.",
        author: "Jean Nidetch",
    },
    {
        quote:"완벽함이 아니라 탁월함을 위해서 애써라.",
        author:"H. Jackson Brown Jr.",
    },
    {
        quote:"세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다.",
        author: "Helen Keller",
    },
    {
        quote:"낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "Mason Cooley",
    },
    {
        quote:"현재뿐 아니라 미래까지 걱정한다면 인생은 살 가치가 없을 것이다.",
        author:"William Somerset Maugham",
    },
    {
        quote:"불가능해 보이는 것은 불확실한 가능성보다 항상 더 낫다.",
        author: "Aristotle",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;