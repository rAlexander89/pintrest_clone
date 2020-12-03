# Pintrest Clone

Pintrest is a single page, social media website that allows users to post photos - ‘pins’ - in collections- ‘boards’ - that can be shared with others. 

# Live site: 
https://pintrest.herokuapp.com

# Tech used:

* Ruby version 2.5.4
* Rails 5.2.4.4
* PostgreSQL
* React
* Javascript

# Features 
Allows users to:
	* post images
	* post details about those images
	* view images
	* view the details about those images
  
# Challenges

The single, most important challenge is how the images are rendered. How this is done is what the entire app revolves around.

Putting the pins into containers is preferable to rendering the images themselves onto the page because the containers themselves are instances of a single container component.

This single container component can be manipulated in such a way that it manipulates how each photo that is rendered through it is presented to the user, thus, saving us time and energy when trying to implement changes as well as allowing us to have an efficient way of maintaining uniformity in the app’s front-facing design.

First, the images are rendered to the main page, the Index, using PinIndexItem

```javascript
render() {
        const { pins } = this.props;

        return (
            <div className="index-container">
                {pins.map((pin) => (
                    <PinIndexItem
                        pin={pin}
                        key={pin.id}
                        photo={pin.photoUrl}
                    />
                ))}
            </div>
        );
    }
```

In the component called PinIndexItem, you can see the relevant information about an image being passed into that container. And through there, we see  how PinIndexItem uses that information that was passed in to render the image to the user:

From PinIndexItem to showPin(pin):

```javascript
render() {
        const { pin } = this.props;

        return (
            <div>
                <Link to={`/pins/${pin.id}`}>
                <img className="idx-image" src={pin.photoUrl} onClick={() => this.showPin(pin)}/>
                </Link>
            </div>
        );
    }
```

Further, here is a piece of code there, ‘this.showPin’ that passes long information regarding that image that then passes along information about that image to a PinShowContainer that that whole image in a larger size to the user as well as details about that image stored inside of the pin.

```javascript
showPin(pin) {
        return(
            <PinShowContainer pin={pin}/>
        )
}
```

From showPin(pin) to PinShowContainer:

```javascript
return (
        <div className="content-container">
            <div className='pin-show-container'>
                <div className="pin-show-item">
                    <img className="pin-item" src={this.props.pin.photoUrl} />
                </div>
                    <div className='pin-show-det'>
                        <ul>
                            <li id='pin-title'>{pin.title}</li>
                            <li id='pin-owner'>photo by {this.props.owner.username}</li>
                            <li id='pin-description'>{pin.description}</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
```

