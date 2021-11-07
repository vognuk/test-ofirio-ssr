import React, {useState, useEffect} from 'react';
import initialWeatherData from '../state/state'
import Layout from '../components/Layout';
import requestURL from '../helpers/variables';

const withGetCityWeather = (WrappedComponent, cityName, days) => {
    return (props) => {
        console.log(Object.values (requestURL)[0]);
        const [data, setData] = useState(initialWeatherData);
        // useEffect(async () => {
        //     try {
        //         // const query = graphql`
        //         // query FiveDaysResult {
        //         //     list {
        //         //     edges {
        //         //         node {
        //         //         gender
        //         //         name {
        //         //             title
        //         //             first
        //         //             last
        //         //         }
        //         //         picture {
        //         //             large
        //         //             medium
        //         //             thumbnail
        //         //         }
        //         //         }
        //         //     }
        //         //     }
        //         // }
        //         // `;

        //     } catch(error){

        //     }
        // })

        // {
        //     allRestApiPosts {
        //       edges {
        //         node {
        //           userId
        //           title
        //           body
        //         }
        //       }
        //     }
        //   }
        
        return (
            <Layout>
                <WrappedComponent 
                    data = {data}
                    cityName = {cityName}
                    days = {days}
                    {...props}
                />
            </Layout>
        )
    }
}

export default withGetCityWeather;
