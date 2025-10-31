
export class Component {

    constructor(tag, props = {}, children = []) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }

    render() {
        const element = document.createElement(this.tag);

        if (this.props.attributes) {
            Object.entries(this.props.attributes).forEach(([key, value]) => {
                element.setAttribute(key, value);
            })
        }

        if (this.props.events) {
            Object.entries(this.props.events).forEach(([event, handler]) => {
                element.addEventListener(event, handler);
            });
        }

        this.children.forEach(child => {
            if (child instanceof Component) {
                element.appendChild(child.render());
            } else {
                element.appendChild(document.createTextNode(child));
            }
        });

        return element;
    }

    renderInto(container) {
        container.appendChild(this.render());
    }

    appendChild(child) {
        this.children.push(child);
        return this;
    }

    appendChildren(children) {
        this.children.push(...children);
        return this;
    }
}