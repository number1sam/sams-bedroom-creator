# Sam's Bedroom Creator 🏠✨

An interactive React web application that lets kids design and customize their dream bedroom! Perfect for children around 11 years old who want to explore interior design in a fun, game-like environment.

## 🎮 Features

### Jake's Bedroom Showcase
- Beautiful visual representation of a fully designed 11-year-old boy's bedroom
- Interactive room layout with furniture, decorations, and personal items
- Sports equipment, gaming setup, study area, and toy storage
- Colorful wall posters and themed decorations

### Interactive Design Game
- **Drag & Drop Interface**: Easy-to-use drag and drop functionality for placing items
- **10+ Furniture Items**: Bed, desk, bookshelf, dresser, computer, lamp, plant, basketball, guitar, and rug
- **3D-Style Room**: Realistic room perspective with floor and wall backgrounds
- **Item Management**: Click to select items, remove unwanted pieces
- **Room Reset**: Clear entire room to start fresh
- **Responsive Design**: Works on both desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/number1sam/sams-bedroom-creator.git
   cd sams-bedroom-creator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:1234`
   - The app will automatically reload when you make changes

### Building for Production
```bash
npm run build
```

## 🎯 How to Use

1. **Start on the Home Page**: View Jake's pre-designed bedroom for inspiration
2. **Click "Create Your Own Room!"**: Enter the interactive design mode
3. **Drag Items**: Select furniture and decorations from the left panel
4. **Drop in Room**: Place items anywhere in the 3D room space
5. **Customize**: Click on placed items to select and remove them
6. **Reset**: Use "Clear Room" to start over with a blank canvas
7. **Navigate Back**: Return to Jake's room showcase anytime

## 🛠️ Technical Details

### Built With
- **React 18**: Modern JavaScript framework for building user interfaces
- **Parcel**: Fast, zero-configuration build tool
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **HTML5**: Semantic markup and drag-and-drop API

### Project Structure
```
├── App.js              # Main application component with routing
├── App.css             # Styles for home page and Jake's bedroom
├── DesignGame.js       # Interactive design game component
├── DesignGame.css      # Styles for the design game interface
├── index.js            # React app entry point
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

### Key Components
- **App Component**: Handles navigation between showcase and design game
- **DesignGame Component**: Manages drag-and-drop functionality and room state
- **Item Palette**: Displays available furniture and decorations
- **Room Canvas**: 3D-perspective room where items are placed

## 🎨 Design Philosophy

Created with children in mind, featuring:
- **Bright, engaging colors** and fun gradients
- **Comic Sans font** for a playful, kid-friendly feel
- **Emoji icons** to make items instantly recognizable
- **Smooth animations** for satisfying interactions
- **Simple controls** that are easy for young users to understand

## 🔧 Customization

Want to add new items or modify the room? Check out:
- `BEDROOM_ITEMS` array in `DesignGame.js` for adding new furniture
- CSS files for customizing colors, animations, and layout
- Room dimensions and styling in the `.room-canvas` class

## 📱 Browser Support

Works on all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

This project was created as a learning exercise, but contributions are welcome! Feel free to:
- Report bugs or suggest features
- Submit pull requests for improvements
- Share your room designs and creative ideas

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with the assistance of Claude AI
- Inspired by the creativity and imagination of young designers everywhere
- Special thanks to Jake for the bedroom design inspiration!

---

**Happy Decorating! 🎉**
