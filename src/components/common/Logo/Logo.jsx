import PropTypes from 'prop-types';

function Logo({ size }) {

    const sizeClass = {
        sm: "-my-4 mx-8 w-20 h-20 rounded-full border-2 border-white overflow-hidden shadow-[0px_0px_5px_rgba(255,255,255,0.5)]",
        md: "-my-8 mx-0 w-40 h-40 rounded-full border-5 border-white overflow-hidden shadow-[0px_0px_5px_rgba(255,255,255,0.5)]",
        mdNoMargin: "my-0 mx-0 w-40 h-40 rounded-full border-5 border-white overflow-hidden shadow-[0px_0px_5px_rgba(255,255,255,0.5)]",
    }

    return (

        <div className={sizeClass[size]}>
            <img src="images/logo.jpg" className="w-full h-full object-cover object-center" />
        </div>
    );
};

Logo.propTypes = {
    size: PropTypes.string.isRequired
}

export default Logo;