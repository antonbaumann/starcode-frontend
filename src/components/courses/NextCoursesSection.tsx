import './NextCoursesSection.scss';
import SectionTitle from "../SectionTitle"
import girlImg from '../../assets/img/girl1.png';
import Button from '../Button';
import ArrowDownIcon from '../ArrowDownIcon';

const NextCoursesSection = () => {
    return (
        <section className="next-courses-section">
            <div className="content">
                <SectionTitle className="title">Unsere Nächsten Kurse</SectionTitle>  
                {/* <div className='filter-container'>
                    <Button 
                        text='Stadt'
                        className='filter-button'
                    />
                    <Button 
                        text='Kurs'
                        className='filter-button'
                    />
                    <Button 
                        text='Fortschritt'
                        className='filter-button'
                    />
                    <Button 
                        text='Zurücksetzen'
                        className='reset-button'
                    />
                </div> */}

                <div className='all-courses-indicator'>
                    <p>Zu allen Kursen</p>
                    <ArrowDownIcon height='3em' stroke='#000' />
                </div>

            </div>
            <div className="image-container">
                <img src={girlImg} />
            </div>
        </section>
    )
}

export default NextCoursesSection