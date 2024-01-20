import { Container, Row, Col } from 'react-bootstrap';
import './Home.scss';
import UserTable from '../../components/usertable/UserTable';
import UserTableList from '../../components/usertable/UsertableList';

function HomePage() {
  return (
    <div className='homepage'>
      <Container>
        <Row>
          <Col md={12}>
            {/* <UserTable /> */}
            <UserTableList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;