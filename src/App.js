import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { NotFound } from './Pages/NotFound';
import { Category } from './Pages/Category';
import { Recipe } from './Pages/Recipe';

function App() {
    return (
        <>
            <Router basename='/cook'>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/about' component={About} />
                        <Route path='/contacts' component={Contact} />
                        <Route path='/category/:name' component={Category} />
                        <Route path='/meal/:id' component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
