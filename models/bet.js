class Bet {
    constructor (id, betType, betAmount, timeAmount, timeSelect, charityType,
        sunday, monday, tuesday, wednesday, thursday, friday, saturday, userId) {
        this.id = id;
        this.betType = betType;
        this.betAmount = betAmount;
        this.timeAmount = timeAmount;
        this.timeSelect = timeSelect;
        this.charityType = charityType;
        this.sunday = sunday;
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.userId = userId;
    }
}

export default Bet;