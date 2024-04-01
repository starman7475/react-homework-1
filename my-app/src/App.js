import React from "react";

// import Profile from "./Profile";
// import user from "./user.json";

// import Statistics from "./Statistics";
// import data from "./data.json";

// import friends from "./friends.json";
// import { FriendList } from "./FriendList";

import TransactionHistory from "./TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div>
      {/* <FriendList friends={friends} /> */}

      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}

      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}

      <TransactionHistory items={transactions} />
    </div>
  );
}
