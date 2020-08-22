(function () {
    'use strict';

    angular
        .module('simple-purchase', [])
        .controller('purchaseCtrl', purchaseCtrl)

    /** @ngInject */
    function purchaseCtrl($scope) {
        $scope.selectedMeat = null;
        $scope.selectedQuantity = null;
        $scope.meatAmount = null;
        $scope.totalAmount = 0;
        $scope.showReset = false;
        $scope.meatList = [
            { id: 1, name: "Mutton", amount: 550 },
            { id: 2, name: "Chicken", amount: 110 },
            { id: 3, name: "Beef", amount: 200 },
            { id: 4, name: "Fish", amount: 570 }
        ];

        $scope.meatQuantities = [
            { id: 1, meatID: 1, quantity: "250 gms", quant: 0.25 },
            { id: 2, meatID: 1, quantity: "500 gms", quant: 0.5 },
            { id: 3, meatID: 1, quantity: "750 gms", quant: 0.75 },
            { id: 4, meatID: 1, quantity: "1 kg", quant: 1 },
            { id: 5, meatID: 2, quantity: "500 gms", quant: 0.5 },
            { id: 6, meatID: 2, quantity: "750 gms", quant: 0.75 },
            { id: 7, meatID: 2, quantity: "1 kg", quant: 1 },
            { id: 8, meatID: 3, quantity: "500 gms", quant: 0.5 },
            { id: 9, meatID: 3, quantity: "1 kg", quant: 1 },
            { id: 10, meatID: 4, quantity: "1 kg", quant: 1 },
            { id: 11, meatID: 4, quantity: "2 kg", quant: 2 },
        ];
        $scope.meatSelected = () => {
            if ($scope.selectedMeat)
                $scope.meatAmount = $scope.meatList.find(item => item.id == $scope.selectedMeat).amount;
            else $scope.meatAmount = null;
        }
        $scope.quantitySelected = () => {
            if ($scope.selectedQuantity)
                $scope.totalAmount = $scope.meatQuantities.find(item => item.id == $scope.selectedQuantity).quant * $scope.meatList.find(item => item.id == $scope.selectedMeat).amount;
            else $scope.totalAmount = 0;
        }
        $scope.submit = (event) => {
            console.log(event)
            let form = document.getElementById("purchaseForm");
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                $scope.showReset = true;
                swal({
                    title: "Item(s) Purchased!",
                    text: "Payment Done Successfully!",
                    icon: "success",
                    buttons: false,
                    timer: 2500,
                });
            }
            form.classList.add('was-validated');
        }
        $scope.Reset = () => {
            $scope.meatAmount = null;
            $scope.totalAmount = 0;
            $scope.showReset = !$scope.showReset;
            document.getElementById("purchaseForm").reset();

        }
        function init() {
        }

        init();
    }

}());