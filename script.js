 function togglePayment(method) {
            const allDetails = document.querySelectorAll('.account-details');
            allDetails.forEach(detail => detail.style.display = 'none');
            
            const selected = document.getElementById(method);
            selected.style.display = 'block';
            
            document.querySelectorAll('.payment-method').forEach(m => m.style.borderColor = '#e0e0e0');
            event.currentTarget.style.borderColor = '#3498db';
        }

        function confirmPayment() {
            alert('Terima kasih! Konfirmasi pembayaran telah dikirim ke WhatsApp kami.');
        }
  