'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('people', [
			{
				name: 'Ana Souza',
				status: true,
				email: 'ana@ana.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Marcos Cintra',
				status: true,
				email: 'marcos@marcos.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Felipe Cardoso',
				status: true,
				email: 'felipe@felipe.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Sandra Gomes',
				status: false,
				email: 'sandra@sandra.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Paula Morais',
				status: true,
				email: 'paula@paula.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Sergio Lopes',
				status: true,
				email: 'sergio@sergio.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});

	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('people', null, {});

	}
};
