const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          comment: "상품 아이디 (기본키)",
        },
        name: {
          type: Sequelize.STRING(200),
          allowNull: false,
          comment: "상품 이름",
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
          comment: "상품 가격",
        },
        imageUrl: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "이미지 URL 주소",
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "상품 카테고리",
        },
      },
      {
        sequelize,
        modelName: 'Product',
        tableName: 'products',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  static associate(db) {
    this.hasMany(db.ProductDetail, { foreignKey: 'productId', as: 'details' });
    this.hasMany(db.ProductSubImage, { foreignKey: 'productId', as: 'subImages' });
    this.hasMany(db.Reservation, { foreignKey: 'prodId', sourceKey: 'id'});//Reservation로 보냄 

  }
}

class ProductDetail extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          comment: "디테일 아이디 (기본키)",
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "디테일 제목",
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "디테일 설명",
        },
        detailType: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "디테일 타입",
        },
        detailDescription: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "디테일 설명",
        },
        detailPrice: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
          comment: "디테일 가격",
        },
      },
      {
        sequelize,
        modelName: 'ProductDetail',
        tableName: 'product_details',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  static associate(db) {
    this.belongsTo(db.Product, { foreignKey: 'productId', as: 'product' });
  }
}

class ProductSubImage extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          comment: "서브 이미지 아이디 (기본키)",
        },
        subImageUrl: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "서브 이미지 URL 주소",
        },
      },
      {
        sequelize,
        modelName: 'ProductSubImage',
        tableName: 'product_sub_images',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  static associate(db) {
    this.belongsTo(db.Product, { foreignKey: 'productId', as: 'product' });
  }
}

module.exports = { Product, ProductDetail, ProductSubImage };
