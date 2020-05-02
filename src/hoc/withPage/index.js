import React from 'react';
import { Card } from 'bootstrap-4-react';
import Header from '../../component/global/header';
import Footer from '../../component/global/footer';

function WithPage(Component) {
    return () => {
        return (
            <div style={{width: '100%'}} >
                <Card>
                    <Card.Header>
                        <Header />
                    </Card.Header>
                    <Card.Body>
                        <Component />
                    </Card.Body>
                    <Card.Footer>
                        <div>
                            this is footer
                            <Footer/>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default WithPage;