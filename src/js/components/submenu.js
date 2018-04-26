import config from "../config";

module.exports = [
    {
        urL         :   '/competitionsTable',
        icon        :   'icon-goal-1',
        text        :   'Zawody',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    },
    {
        urL         :   '/results',
        icon        :   'icon-business-chart-2',
        text        :   'Moje wyniki',
        isVisible   :   config.loggedAs == 'player' ? true : false
    },
    {
        urL         :   '/records',
        icon        :   'icon-award-4',
        text        :   'Moje rekordy',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    },
    {
        urL         :   '/measurement',
        icon        :   'icon-calculator-3',
        text        :   'Moje pomiary',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    },
    {
        urL         :   '/profile',
        icon        :   'icon-profile-athlete',
        text        :   'Profil',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    }
];