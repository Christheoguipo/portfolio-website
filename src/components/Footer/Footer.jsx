import Logo from '../common/Logo/Logo';
import ContactIcons from '../common/ContactIcons/ContactIcons';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <section className='flex flex-col py-20 mb-20 items-center'>
            <Logo size='mdNoMargin' />
            <span className='text-2xl md:text-3xl mt-4' >Let's connect!</span>
            <ContactIcons />
            <span className='text-sm pt-2'>© Christheo Guipo {year}</span>
        </section>
    );
}

export default Footer;