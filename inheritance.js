class NotificationSender {
    constructor(status) {
        this.status = status;
    }

    sendNotificaton(notificaton) { // need to be able to send notification
        console.log("Sending: " + notificaton);
    }

    findUsersWithStatus(status) { // a method to find users with a status
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender extends NotificationSender { // first children class
    constructor(status) {
        super(status);
    }

    calculateDiscount(status) { // a method to calculate a discount for the promotions being sent
        if (status === "GOLD") {
            return .3;
        } else if (status === "SILVER") {
            return .15;
        }
        return 0;
    }
}

class CollectionSender extends NotificationSender { //second children class
    constructor(status) {
        super(status);
    }

    calculateFee(status) {
        if (status === "OVERDUE") {
            return 10;
        } else if (status === "DELIQUENT") {
            return 25;
        }
        return 5;
    }
}

let collectionSender = new CollectionSender("OVERDUE");
collectionSender.sendNotificaton("this is a test collections notification.");