import { Fragment } from 'react';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
export default function Home() {
  return (
    <div >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis efficitur justo. In convallis sapien eget lorem pellentesque, sed viverra massa lacinia. Nulla facilisi. Vestibulum id scelerisque nibh, sit amet commodo dui. Nullam quis pellentesque arcu. Integer hendrerit elementum suscipit. Praesent euismod auctor interdum. Sed mattis velit eros, quis maximus justo ultrices eget. Phasellus vel justo rhoncus, rhoncus ante ac, varius nulla. Pellentesque sed commodo nisl.

      Nulla et auctor ante, non vestibulum ex. Cras justo quam, malesuada ac scelerisque faucibus, blandit in elit. Sed quis lorem vel erat tincidunt maximus. Vestibulum sed dui libero. Proin interdum ut odio eget tincidunt. Nulla vitae nisl lectus. Proin aliquet sapien enim, tempus vestibulum felis euismod at. Pellentesque iaculis metus massa, sed feugiat ante porttitor a. Suspendisse pharetra, risus nec molestie luctus, dolor purus dignissim nisi, a consectetur magna mi eget diam. Ut turpis ligula, luctus non lorem vel, vulputate eleifend metus. Proin tortor odio, mattis vitae blandit quis, tincidunt quis lectus. Aenean quis lectus et velit egestas dapibus. Nullam a feugiat tellus, sed mattis eros. Donec sodales id lorem porttitor efficitur.
    </div>
  )
}

Home.getLayout = (page) => (
  <Fragment>
    <Header/>
    {page}
    <Footer/>
  </Fragment>
)
