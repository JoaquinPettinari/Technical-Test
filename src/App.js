import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '50px',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}