# 📌 Database Seeding
In this commit, we have done database seeding.

## 📖 What is Database Seeding?
Database seeding is the process of **pre-populating a database** with initial or test data. This is useful for:
- Providing **default values** when setting up a new database.
- **Testing** application features without manually entering data.
- **Developing locally** with a dataset similar to production.

## 🚀 Why Do We Use Seeding?
Seeding helps in:
- **Rapid development:** No need to manually insert test data.
- **Consistent testing:** Ensures test environments always have the same dataset.
- **Production setup:** Some applications require default admin accounts or predefined settings.

## 🛠 How Seeding Works in Our Project?
1. **Clears existing data** from collections to prevent duplicates.
2. **Generates mock data** (Agents, Reviews, Galleries, Properties).
3. **Inserts the generated data** into the database.

### 📂 Collections Seeded:
- **Agents** → Sample real estate agents.
- **Reviews** → User reviews with ratings.
- **Galleries** → Property images for listings.
- **Properties** → Randomly assigned agents, reviews, images.