import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });
    const [availableTimes, setAvailableTimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleDateChange = async (e) => {
        const selectedDate = e.target.value;
        setFormData(prev => ({ ...prev, date: selectedDate, time: '' }));
        
        try {
            const response = await fetch(`http://localhost:5000/api/availability?date=${selectedDate}`);
            const times = await response.json();
            setAvailableTimes(times);
        } catch (err) {
            console.error('Error fetching available times:', err);
            setError('Failed to load available times');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Booking failed');
            
            setSuccess(true);
            setFormData({ name: '', email: '', date: '', time: '', message: '' });
        } catch (err) {
            setError('Failed to submit booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="booking" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-transparent to-black/30">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Book a Consultation
                    </h2>
                    
                    {success ? (
                        <div className="text-center p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                            <h3 className="text-2xl font-bold text-green-400 mb-4">Booking Successful!</h3>
                            <p className="text-gray-400 mb-6">Thank you for your booking. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="bg-green-500 text-white py-2 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                            >
                                Book Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-primary)] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-primary)] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        value={formData.date}
                                        onChange={handleDateChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-primary)] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                        Time
                                    </label>
                                    <select
                                        id="time"
                                        required
                                        value={formData.time}
                                        onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-primary)] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        disabled={!formData.date || availableTimes.length === 0}
                                    >
                                        <option value="">Select a time</option>
                                        {availableTimes.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-primary)] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                ></textarea>
                            </div>

                            {error && (
                                <div className="text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Submitting...' : 'Book Consultation'}
                            </button>
                        </form>
                    )}
                </div>
            </RevealOnScroll>
        </section>
    );
};