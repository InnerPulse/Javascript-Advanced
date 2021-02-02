function monkeyPatcher(arg) {
    const actions = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            let rating = "new";
            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            const balance = this.upvotes - this.downvotes;
            const totalVotes = this.upvotes + this.downvotes;
            const upvotesProcentage = (this.upvotes / (this.upvotes + this.downvotes)) * 100;

            if (upvotesProcentage > 66) {
                rating = "hot";
            } else if (balance >= 0 && (currentUpVotes > 100 || currentDownVotes > 100)) {
                rating = "controversial";
            }
            if (balance < 0) {
                rating = "unpopular";
            }
            if (totalVotes < 10) {
                rating = "new";
            }

            if (totalVotes > 50) {
                const garterValue = currentUpVotes >= currentDownVotes ? currentUpVotes : currentDownVotes;
                const addedValue = Math.ceil(garterValue * 0.25);
                currentUpVotes += addedValue;
                currentDownVotes += addedValue;
            }

            return [currentUpVotes, currentDownVotes, balance, `${rating}`];
        },
    };

    return actions[arg]();
}


// let post = {
//     id: "3",
//     author: "emil",
//     content: "wazaaaaa",
//     upvotes: 100,
//     downvotes: 100,
// };

// monkeyPatcher.call(post, "upvote");
// monkeyPatcher.call(post, "downvote");
// monkeyPatcher.call(post, "score");

// let score = monkeyPatcher.call(post, "score"); // [127, 127, 0, 'controversial']
// console.log(score);
// monkeyPatcher.call(post, "downvote"); // (executed 50 times)
// score = monkeyPatcher.call(post, "score"); // [139, 189, -50, 'unpopular']
