import PropTypes from 'prop-types';
import calorieIcon from "../../assets/infos/calorie.svg";
import carbohydrateIcon from "../../assets/infos/carbohydrate.svg";
import lipidIcon from "../../assets/infos/lipid.svg";
import proteinIcon from "../../assets/infos/protein.svg";
import "./InfoCard.scss";

const InfoCard = ({ category, value }) => {

  const categories = {
    Calories: {
      iconName: calorieIcon,
      bgColor: '#FF0000',
      unit: 'kCal'
    },
    Protéines: {
      iconName: proteinIcon,
      bgColor: '#4AB8FF',
      unit: 'g'
    },
    Glucides: {
      iconName: carbohydrateIcon,
      bgColor: '#F9CE23',
      unit: 'g'
    },
    Lipides: {
      iconName: lipidIcon,
      bgColor: '#FD5181',
      unit: 'g'
    },
  }

  return (
    <div className="infoCard">
      <div className="infoCard__icon" style={{ backgroundColor: `${categories[category].bgColor}1e` }}>
        <img
          src={categories[category].iconName}
          alt={`icone de la catégorie ${category}`}
        />
      </div>
      <div className="infoCard__txt">
        <h2 className="infoCard__txt__value">{value}{categories[category].unit}</h2>
        <p className="infoCard__txt__category">{category}</p>
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  category: PropTypes.string,
  value: PropTypes.number
};

export default InfoCard