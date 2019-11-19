import Bet from '../models/bet';

const BETS = [
    new Bet(
        '1',
        'Wakeup',
        20.00,
        'null',
        '8:00am',
        'ALZ Org',
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        '1'
    ),
    new Bet(
        '2',
        'Wakeup',
        10.00,
        'null',
        '6:00am',
        'ALZ Org',
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        '2'
    ),
    new Bet(
        '3',
        'Workout',
        5.00,
        '1:00:00',
        '12:00pm',
        'ALZ Org',
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        '1'
    )
];

export default BETS;