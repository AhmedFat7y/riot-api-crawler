var LolApi = require('leagueapi');


// ['Gold V', 'Challenger I', 'Master I', 'Diamond IV', 'Platinum III', 'Bronze II']
let seedSummoners = ['BonhartCZ', 'KlREI', 'MaCkeN4', '3zB1tchx3', 'Congestron', 'TorpidxD'];


LolApi.init('RGAPI-2eef322c-76f7-4ac4-952f-9f4b1b8b94ba', 'eune');
LolApi.setRateLimit(8, 400);

LolApi.getChampions(true, function(err, champs) {
  console.log(champs);
});

//The wrapper also accepts promises:
LolApi.Summoner.getByName(seedSummoners[0])
    .then(function (summoner) {
      console.log(summoner);
    }).catch(function (error) {
      console.log(error);
    });
