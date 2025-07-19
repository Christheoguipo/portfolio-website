import Logo from '../common/Logo/Logo';
import ContactIcons from '../common/ContactIcons/ContactIcons';

function Footer() {
    return (
        <section className='flex flex-col py-20 mb-20 items-center'>
            <Logo size='mdNoMargin' />
            <span className='text-3xl mt-4' >Let's connect!</span>
            <ContactIcons />
        </section>
    );
}

export default Footer;