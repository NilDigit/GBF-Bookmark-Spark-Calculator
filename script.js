javascript: (() => {
    $.ajax({
        url: "/item/gacha_ticket_and_others_list_by_filter_mode",
        type: 'GET',
        success: (res) => {
            const crystal = parseInt($(".prt-stone").text());
            var premium10PartTicket = 0;
            var premiumDrawTicket = 0;

            res[0].forEach(element => {
                switch (element.item_id) {
                    case "20010":
                        premium10PartTicket = parseInt(element.number);
                        break;

                    case "20011":
                        premiumDrawTicket = parseInt(element.number);
                        break;

                    default:
                        break;
                }
            });
            const spark = 300;
            const crystalPerdraw = 300;
            const totalCrystalDraw = crystal / crystalPerdraw;
            const totalDraw = totalCrystalDraw + (premium10PartTicket * 10) + premiumDrawTicket;
            alert('Total draw: ' + parseInt(totalDraw) + ' / ' + spark + '\nComplete: ' + parseInt((totalDraw / spark) * 100) + '%');
        }
    });
})();