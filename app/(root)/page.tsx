import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transction."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1230.32}
          />
        </header>
        Recent Transtaion
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
