import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
    const loggedIn = { firstName: 'José', lastName: 'G', email: 'jose@gmail.com'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
            <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 235.75}, { currentBalance: 500.25}]}
            />
        </section>
    )
}

export default Home